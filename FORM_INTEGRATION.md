<!-- 
FORM INTEGRATION GUIDE
Complete instructions for connecting forms to your email/CRM

============================================================
OPTION 1: SIMPLE EMAIL (Recommended for getting started)
============================================================

Using Formspree (Free tier available):
1. Go to formspree.io
2. Sign up for free
3. Create a new form
4. Get your form endpoint: https://formspree.io/f/xxxxx

Update the form in index.html:
<form class="email-form" action="https://formspree.io/f/xxxxx" method="POST">
    <input type="email" name="email" placeholder="Enter your email" required>
    <input type="hidden" name="_subject" value="New Guide Download">
    <input type="hidden" name="_next" value="https://yoursite.com/thank-you">
    <button type="submit" class="btn-primary">Download Free PDF</button>
</form>

============================================================
OPTION 2: CRM INTEGRATION (Recommended for scalability)
============================================================

A) PIPEDRIVE (Most popular for sales)
---
1. Go to pipedrive.com and create account
2. Get your API token (Settings → API)
3. Use Zapier to connect:
   - Trigger: Form submission
   - Action: Create deal in Pipedrive
   - Map fields: email → contact, name → deal title

B) HUBSPOT (All-in-one marketing)
---
1. Go to hubspot.com (free tier available)
2. Create a form in Forms → Create Form
3. Get the embed code
4. Replace form in index.html with HubSpot form embed

C) SALESFORCE (Enterprise)
---
1. Use Zapier or IFTTT for integration
2. Connect form submissions to Salesforce leads
3. Set up lead scoring and routing

D) MAILCHIMP (Email focused)
---
1. Go to mailchimp.com
2. Create a form with audience
3. Get embed code
4. Use in guide section

============================================================
OPTION 3: API-LEVEL INTEGRATION (Advanced)
============================================================

Using JavaScript + Fetch API to send to your backend:

File: form-handler.js
---
async function handleGuideFormSubmit(e) {
    e.preventDefault();
    
    const email = document.querySelector('input[name="email"]').value;
    
    try {
        // Send to your backend or third-party API
        const response = await fetch('https://your-api.com/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                source: 'faithopsai_guide',
                timestamp: new Date().toISOString()
            })
        });
        
        if (response.ok) {
            alert('Thank you! Check your email for the PDF');
            document.getElementById('guide-form').reset();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error. Please try again.');
    }
}

// Add to script.js
document.getElementById('guide-form').addEventListener('submit', handleGuideFormSubmit);

============================================================
OPTION 4: FULL AUTOMATION (Recommended for serious conversions)
============================================================

Using Zapier to connect everything:

Workflow:
Form Submission → Zapier Trigger
  ↓
  ├→ Create lead in Pipedrive
  ├→ Add to Mailchimp list
  ├→ Send welcome email
  ├→ Create Google Sheet log
  └→ Send Slack notification

Setup Steps:
1. Go to zapier.com
2. Create new Zap
3. Choose trigger: Webhooks by Zapier
4. Point form to webhook URL
5. Add 4-5 actions (create lead, email, etc.)
6. Test end-to-end

============================================================
CONTACT FORM SPECIFIC SETUP
============================================================

Step 1: Choose your backend
Option A: Formspree (easiest)
Option B: Your own backend (most control)
Option C: Zapier (no coding needed)

Step 2: Update index.html
Replace line ~260 with your endpoint:

Using Formspree:
<form class="contact-form" action="https://formspree.io/f/xxxxx" method="POST">
    <input type="text" name="name" placeholder="Full Name" required>
    <input type="email" name="email" placeholder="Email Address" required>
    <input type="tel" name="phone" placeholder="Phone Number" required>
    <input type="text" name="company" placeholder="Company Name" required>
    <textarea name="message" placeholder="Tell us about your waste management challenges..." rows="5" required></textarea>
    <input type="hidden" name="_subject" value="New Diagnostic Request">
    <input type="hidden" name="_next" value="https://yoursite.com/thank-you">
    <button type="submit" class="btn-primary">Submit Diagnostic Request</button>
</form>

Step 3: Test thoroughly
- Submit test form
- Check that you receive email/lead
- Verify all fields captured correctly
- Test on mobile

============================================================
POST-SUBMISSION ACTIONS (Automation)
============================================================

What should happen after form submission?

1. IMMEDIATELY:
   ✓ Show thank you message
   ✓ Send confirmation email to user
   ✓ Log data to CRM

2. WITHIN 1 HOUR:
   ✓ Notify you (email or Slack)
   ✓ Create calendar reminder for follow-up
   ✓ Send automatic email sequence

3. WITHIN 24 HOURS:
   ✓ Personal outreach from Samuel
   ✓ Schedule diagnostic call
   ✓ Build relationship

Example Email Sequence:
Day 0 - Confirmation: "Thank you for requesting a diagnostic"
Day 1 - Value: "Here's what we typically find in waste audits"
Day 2 - Social Proof: "Recent case study: 28% cost reduction"
Day 3 - Follow-up: "Ready to schedule your diagnostic?"

============================================================
RECOMMENDED SETUP FOR FAITHOPSAI
============================================================

Best combo for conversion + scalability:

1. PRIMARY: Pipedrive (CRM for sales)
   - $12/month basic plan
   - Track leads through sales process
   - Built-in reporting and forecasting

2. SECONDARY: Mailchimp (Email follow-up)
   - Free for up to 500 contacts
   - Automate email sequences
   - Track opens and clicks

3. CONNECTOR: Zapier (Automation)
   - Connect Pipedrive + Mailchimp
   - Auto-create leads and send emails
   - No custom coding needed

4. ANALYTICS: Google Analytics 4
   - Track conversions
   - Monitor traffic sources
   - Optimize underperforming sections

Setup Time: ~2 hours
Monthly Cost: ~$15 (Pipedrive basic)
Expected ROI: 5-10x within first month

============================================================
TESTING CHECKLIST
============================================================

□ Form submits without errors
□ Data appears in CRM/email service
□ Confirmation email received
□ All fields captured correctly
□ Thank you page displays
□ Mobile form works
□ Email from address is correct
□ Reply-to address set properly
□ Unsubscribe link in emails
□ GDPR compliance (privacy notice)
□ SSL certificate active (HTTPS)

============================================================
COMPLIANCE & SECURITY
============================================================

GDPR (EU users):
- Add consent checkbox: "I agree to receive emails"
- Include unsubscribe link
- Honor deletion requests
- Privacy policy page

CCPA (California users):
- Disclose data usage
- Allow opt-out
- Privacy policy page

CAN-SPAM (US):
- Include physical address
- Honor unsubscribe requests
- Clear subject line
- ID as promotional email

Security:
- Use HTTPS (not HTTP)
- Store passwords securely
- Regular backups
- Validate all inputs

============================================================
TROUBLESHOOTING
============================================================

"Form won't submit"
→ Check action URL is correct
→ Ensure method="POST"
→ Check browser console for errors

"Email not received"
→ Check spam folder
→ Verify email address in form
→ Check Formspree account settings

"Data not in CRM"
→ Verify Zapier connection is active
→ Check CRM API key
→ Test webhook URL

"Duplicate entries"
→ Disable browser auto-submit
→ Add duplicate detection in form handler
→ Check Zapier isn't running twice

============================================================

Questions? Check the CRM/service documentation or reach out to their support.
Start simple with Formspree, upgrade to Pipedrive as you scale.
