# WasteControl Website - Deployment Guide

## Overview
Your website now has 4 main pages ready to deploy to GitHub Pages:

1. **index.html** - Homepage (customized with your branding)
2. **index-new.html** - Enhanced homepage (redesigned with new content)
3. **waste-audit.html** - Waste Audit service page (full methodology + deliverables)
4. **pricing.html** - Pricing & Engagement Models (3 service packages)
5. **faq.html** - Comprehensive FAQ section (all common questions)
6. **styles.css** - Complete responsive styling
7. **script.js** - Interactive features and animations

**Current GitHub Pages URL:** https://ajjju91.github.io/wastecontrolfaith/

---

## Step 1: Prepare Your Files

All files are located in: `c:\Users\mURALI\Downloads\Codex\faithopsai-upgrade\`

Required files to upload:
- `index.html` (original homepage)
- `index-new.html` (redesigned homepage)
- `waste-audit.html` (service page)
- `pricing.html` (pricing page)
- `faq.html` (FAQ page)
- `styles.css` (styling)
- `script.js` (interactivity)

---

## Step 2: Upload to GitHub

### Option A: Using GitHub Web Interface (Easiest)

1. Go to: https://github.com/ajjju91/wastecontrolfaith
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop the 7 files listed above
4. In the "Commit changes" field, type: `Add pricing, FAQ, and new homepage pages`
5. Click **"Commit changes"**

### Option B: Using Git Command Line

If you have Git installed:

```bash
# Navigate to your local repository
cd your-local-repo-path

# Copy the new files into your repo directory
cp /path/to/index-new.html .
cp /path/to/waste-audit.html .
cp /path/to/pricing.html .
cp /path/to/faq.html .
cp /path/to/styles.css .
cp /path/to/script.js .

# Add all files
git add index-new.html waste-audit.html pricing.html faq.html styles.css script.js

# Commit
git commit -m "Add new pages: pricing, FAQ, and redesigned homepage"

# Push to GitHub
git push origin main
```

### Option C: Using GitHub Desktop

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Select your wastecontrolfaith repository
4. Copy the new files into your local repository folder
5. You'll see changes in GitHub Desktop
6. Click "Commit to main"
7. Click "Push origin"

---

## Step 3: Update Navigation Links

To make all pages link together properly, you need to update your navigation.

### In `index.html` (if not already done):

Find the navigation section and ensure it links to all pages:

```html
<nav class="nav-links">
    <a href="index.html">Home</a>
    <a href="waste-audit.html">Waste Audit</a>
    <a href="pricing.html">Pricing</a>
    <a href="faq.html">FAQs</a>
    <a href="#contact">Contact</a>
</nav>
```

### In all new pages:

The navigation is already configured to link back:
- Waste Audit page links to `index.html` and pricing
- Pricing page links to `index.html` and waste audit
- FAQ page links to `index.html` and pricing

---

## Step 4: Test Your Site

After uploading, test each page:

1. **Homepage:** https://ajjju91.github.io/wastecontrolfaith/
2. **Waste Audit:** https://ajjju91.github.io/wastecontrolfaith/waste-audit.html
3. **Pricing:** https://ajjju91.github.io/wastecontrolfaith/pricing.html
4. **FAQs:** https://ajjju91.github.io/wastecontrolfaith/faq.html

### Things to verify:
- ✅ All links work
- ✅ Navigation menus appear
- ✅ Buttons are clickable
- ✅ Layout looks good on mobile (use DevTools: F12 → toggle device toolbar)
- ✅ Emails link correctly (`mailto:` links)

---

## Step 5: Deploy Strategy

### Immediate (This Week)
- Upload all 5 main pages (waste-audit, pricing, faq, index-new, and updated index.html)
- Test links and functionality
- Share with Samuel Raj for feedback

### Next (Within 2 Weeks)
- Create additional service pages for:
  - Contract & Vendor Governance
  - Operational Optimisation
  - Ongoing Governance & Reporting
- Each follows the same template as waste-audit.html

### Later (Month 2)
- Create real lead magnet PDFs:
  - "10-Point Waste Cost Checklist"
  - "How to Read a Waste Invoice"
  - "Bin Rationalisation Planner"
- Set up Formspree for email form submissions
- Add Google Analytics 4 tracking

---

## File Structure After Deployment

Your GitHub repository will have:

```
wastecontrolfaith/
├── index.html                    (Original homepage)
├── index-new.html               (Redesigned homepage - option to replace)
├── waste-audit.html             (Service page 1)
├── pricing.html                 (Pricing & engagement models)
├── faq.html                     (Comprehensive FAQs)
├── styles.css                   (All styling)
├── script.js                    (Interactivity)
├── README.md                    (If you have one)
└── docs/                        (Optional documentation folder)
    ├── SETUP_GUIDE.md
    ├── DEPLOYMENT_GUIDE.md
    └── INTEGRATION_GUIDE.md
```

---

## Important Notes

### About index.html vs. index-new.html

**Option 1 (Recommended):** Keep both
- Use `index.html` as your main homepage
- Link to `index-new.html` as an alternate version
- Test which performs better over 2 weeks
- Then decide which to use going forward

**Option 2:** Replace
- Rename `index-new.html` → `index.html` (backup original first!)
- Use the redesigned version as your main homepage
- Delete the old index.html

For now, **Option 1** is safer—keep both live and test performance.

### About Mobile Responsiveness

All pages are fully responsive:
- Desktop (1200px+)
- Tablet (768px)
- Mobile (480px)

Test on your phone to verify layout looks good.

### About Customization

All contact information is already customized:
- Names: Samuel Raj & Ambhati Ajay
- Emails: samuel@faithopsai.com & nani502501@gmail.com
- Brand: WasteControl
- Footer: All pages updated

---

## Troubleshooting

### Issue: Pages not showing up after upload

**Solution:**
- Wait 3-5 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+Shift+Delete)
- Try accessing in a private/incognito window
- Check repository settings → Pages → Source is set to "Deploy from a branch" → "main"

### Issue: Styling looks broken

**Solution:**
- Ensure `styles.css` is uploaded to the same folder as HTML files
- Check browser console for errors (F12 → Console tab)
- Verify file names match exactly (case-sensitive)

### Issue: Links not working

**Solution:**
- Ensure all HTML files are uploaded (index.html, waste-audit.html, pricing.html, faq.html)
- Check that file names match exactly in links
- Make sure `.html` extensions are included in links

### Issue: Images/fonts not loading

**Solution:**
- Check browser console (F12 → Console)
- Ensure internet connection is working
- Google Fonts URLs should load automatically if internet is on

---

## Next Steps

1. ✅ Upload files to GitHub (Steps 1-2 above)
2. ✅ Update navigation links (Step 3 above)
3. ✅ Test all pages (Step 4 above)
4. 📊 Share link with Samuel Raj
5. 📝 Gather feedback on homepage vs. homepage redesign
6. 🔄 Create additional service pages
7. 📎 Set up lead magnet PDFs
8. 📧 Configure Formspree for email submissions
9. 📈 Add Google Analytics tracking

---

## Questions or Issues?

If anything doesn't work:
1. Check this guide's Troubleshooting section
2. Verify all files are uploaded correctly
3. Clear browser cache and refresh
4. Check GitHub repository settings
5. Review browser console for errors (F12 → Console tab)

Good luck with your launch! 🚀
