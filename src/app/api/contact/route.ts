import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * POST /api/contact
 *
 * Accepts a multipart form with:
 *   - name (string, required)
 *   - phone (string, required)
 *   - service (string, required)
 *   - message (string, optional)
 *   - photo (File, optional)
 *
 * Sends an HTML email notification to the business owner via Resend.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = (formData.get('message') as string) || '';
    const photo = formData.get('photo') as File | null;

    // Basic server-side validation
    if (!name?.trim() || !phone?.trim() || !service?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, service' },
        { status: 400 }
      );
    }

    // Format service label for display (convert slug to title case)
    const serviceLabel = service
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Prepare photo attachment if provided
    const attachments: { filename: string; content: Buffer }[] = [];
    if (photo && photo.size > 0) {
      const arrayBuffer = await photo.arrayBuffer();
      attachments.push({
        filename: photo.name || 'photo.jpg',
        content: Buffer.from(arrayBuffer),
      });
    }

    // Build HTML email body
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Request — Handlyr</title>
</head>
<body style="margin:0;padding:0;font-family:Inter,Arial,sans-serif;background:#f4f6f9;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0B1F4A;padding:28px 32px;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                New Service Request
              </h1>
              <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.65);">
                Submitted via Handlyr.com
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Field rows -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;">Full Name</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#111827;">${escapeHtml(name)}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;">Phone Number</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#111827;">
                      <a href="tel:${escapeHtml(phone.replace(/\s/g, ''))}" style="color:#2563EB;text-decoration:none;">${escapeHtml(phone)}</a>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;">Service Requested</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#111827;">
                      <span style="display:inline-block;padding:3px 10px;border-radius:20px;background:#EFF6FF;color:#1D4ED8;font-size:14px;">${escapeHtml(serviceLabel)}</span>
                    </p>
                  </td>
                </tr>

                ${
                  message.trim()
                    ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;">Message / Details</p>
                    <p style="margin:0;font-size:15px;color:#374151;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
                  </td>
                </tr>`
                    : ''
                }

                <tr>
                  <td style="padding:10px 0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#9ca3af;">Photo Attached</p>
                    <p style="margin:0;font-size:15px;color:#374151;">${attachments.length > 0 ? `Yes — ${attachments[0].filename}` : 'No'}</p>
                  </td>
                </tr>

              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="tel:${escapeHtml(phone.replace(/\s/g, ''))}"
                       style="display:inline-block;padding:13px 32px;background:#F97316;color:#ffffff;font-size:15px;font-weight:700;border-radius:10px;text-decoration:none;">
                      Call ${escapeHtml(name)} Back
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 32px;background:#f9fafb;border-top:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                This message was sent from the contact form at <a href="https://handlyr.org" style="color:#6b7280;">handlyr.org</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // Send via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const ownerEmail = process.env.OWNER_EMAIL || 'owner@handlyr.org';

    await resend.emails.send({
      from: 'Handlyr Contact Form <noreply@handlyr.org>',
      to: [ownerEmail],
      subject: `New Request: ${serviceLabel} — ${name}`,
      html,
      ...(attachments.length > 0 ? { attachments } : {}),
    });

    return NextResponse.json(
      { success: true, message: 'Request received. We will be in touch shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/** Escape HTML special characters to prevent XSS in email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
