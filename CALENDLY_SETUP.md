<!-- 
CALENDLY INTEGRATION GUIDE
Replace the placeholder in index.html with your actual Calendly URL

Step-by-Step Setup:
1. Go to calendly.com and create a free account
2. Set up your availability and time slots
3. Click "Share" and copy your unique Calendly URL
4. Replace "https://calendly.com/your-calendly-url" below with your actual URL
5. Test the embed to make sure it works

Example URLs:
- https://calendly.com/samuel/diagnostic (individual time slots)
- https://calendly.com/samuel/diagnostic?month=2026-02 (specific month)
- https://calendly.com/samuel (general profile)

Advanced Options:
- Add &hide_event_type_details=1 to hide full event details
- Add &hide_gdpr_block=1 to remove GDPR consent
- Add &hide_landing_page_details=1 to minimize details

Full Example with Options:
<iframe 
  src="https://calendly.com/samuel/diagnostic?primary_color=1db954&text_color=0b1c2d" 
  width="100%" 
  height="600" 
  frameborder="0">
</iframe>

Color Integration:
- primary_color=1db954 (accent green)
- text_color=0b1c2d (navy blue)

Alternative Integration Methods:
1. Calendly Button (simpler):
   <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
   <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
   <button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/samuel/diagnostic'})">
     Schedule a Call
   </button>

2. Calendly API (advanced):
   Use for custom integrations and automation
   https://calendly.com/api-docs

3. Zapier Integration (recommended):
   - Connect Calendly to your CRM automatically
   - Send confirmations via email
   - Add attendees to mailing lists
   - Trigger follow-up workflows
-->

<!-- CURRENT IMPLEMENTATION IN index.html (around line 186): -->
<section id="booking" class="contact-booking">
    <div class="container">
        <h2 class="section-headline">Request a Free Diagnostic</h2>
        
        <div class="booking-grid">
            <div class="booking-calendly">
                <h3>Schedule a Call</h3>
                <p>Choose a time that works best for you:</p>
                <!-- Replace the src URL with your actual Calendly URL -->
                <iframe 
                    src="https://calendly.com/your-calendly-url" 
                    width="100%" 
                    height="600" 
                    frameborder="0">
                </iframe>
            </div>
            <!-- ... rest of booking section ... -->
        </div>
    </div>
</section>

<!-- TEST YOUR SETUP: -->
For testing, use this sample Calendly URL (read-only):
https://calendly.com/calendly/15min
