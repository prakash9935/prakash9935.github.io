# Portfolio Customization Guide

This guide will help you customize all placeholder content in your portfolio website.

## 📝 Table of Contents
- [Blog Links](#blog-links)
- [Social Media Links](#social-media-links)
- [Certifications](#certifications)
- [HackTheBox Profile](#hackthebox-profile)
- [Blog Posts](#blog-posts)
- [Projects](#projects)
- [Contact Form](#contact-form)

---

## 🔗 Blog Links

**File:** `src/components/Blog.tsx`

**Lines 46-49 and 107-110:** Replace both instances of the blog URL

```tsx
// Find this:
<a href="https://blog.example.com" target="_blank" rel="noopener noreferrer">

// Replace with:
<a href="https://medium.com/@suryaprakashgeesala" target="_blank" rel="noopener noreferrer">
```

---

## 👥 Social Media Links

### LinkedIn & GitHub

**File:** `src/components/Contact.tsx`

**Lines 54-69:** Update social media URLs

```tsx
// LinkedIn (Line 55)
<a href="https://linkedin.com/in/yourprofile"

// Replace with:
<a href="https://www.linkedin.com/in/surya-prakash-geesala/"

// GitHub (Line 63)
<a href="https://github.com/yourprofile"

// Replace with:
<a href="https://github.com/suryaGeesala"  // or your actual GitHub username
```

---

## 🏆 Certifications

**File:** `src/components/EnhancedCertifications.tsx`

**Lines 5-42:** Update the certifications array with your real credentials

### OSCP Certification

```tsx
{
  name: "Offensive Security Certified Professional",
  abbr: "OSCP",
  issuer: "Offensive Security",
  description: "Industry-leading hands-on penetration testing certification",
  color: "from-red-500 to-orange-500",
  verifyUrl: "https://credentials.offsec.com/63fbff35-07ea-403b-8980-e8255df4bd81",
  credentialId: "OS-101-56847",  // Replace with your actual credential ID
},
```

### CompTIA PenTest+

```tsx
{
  name: "CompTIA PenTest+",
  abbr: "PT+",
  issuer: "CompTIA",
  description: "Comprehensive penetration testing and vulnerability assessment",
  color: "from-blue-500 to-cyan-500",
  verifyUrl: "https://www.credly.com/badges/09095c7e-9404-42e7-8a82-046dcfbf8811/public_url",
  credentialId: "VTVJFZFNLMQ41ETW",  // Replace with your actual credential ID
},
```

### CRTO Certification (Optional)

```tsx
{
  name: "Certified Red Team Operator",
  abbr: "CRTO",
  issuer: "Zero-Point Security",
  description: "Advanced adversary simulation and red team operations",
  color: "from-purple-500 to-pink-500",
  verifyUrl: "https://www.credential.net/",  // Replace with your verification URL
  credentialId: "CRTO-67890",  // Replace with your actual credential ID
},
```

### CEH Certification (Optional)

```tsx
{
  name: "Certified Ethical Hacker",
  abbr: "CEH",
  issuer: "EC-Council",
  description: "Foundation in ethical hacking methodologies and tools",
  color: "from-green-500 to-teal-500",
  verifyUrl: "https://cert.eccouncil.org/",  // Replace with your verification URL
  credentialId: "ECC1234567",  // Replace with your actual credential ID
},
```

**To add more certifications:** Simply copy one of the objects above and modify the values.

---

## 🎯 HackTheBox Profile

**File:** `src/components/EnhancedCertifications.tsx`

**Line 84:** Update your HTB profile URL

```tsx
<a
  href="https://app.hackthebox.com/profile/yourusername"
  
// Replace with:
  href="https://app.hackthebox.com/profile/YOUR_HTB_USERNAME"
```

---

## 📰 Blog Posts

**File:** `src/components/Blog.tsx`

**Lines 4-26:** Customize your blog post previews

```tsx
const blogPosts = [
  {
    title: "Your Blog Post Title",
    excerpt: "A compelling excerpt that describes your post content...",
    date: "2024-12-15",  // Format: YYYY-MM-DD
    readTime: "8 min read",  // Estimated reading time
    tags: ["Tag1", "Tag2", "Tag3"],  // Max 3 tags recommended
  },
  // Add more blog posts...
];
```

**Tips:**
- Keep excerpts under 150 characters for best display
- Use 2-3 relevant tags per post
- Update dates to match your actual publication dates
- The blog posts link to `#` by default - you can update line 90 to link to actual Medium posts

---

## 💼 Projects

**File:** `src/components/Projects.tsx`

**Lines 4-35:** Update with your real projects

```tsx
const projects = [
  {
    title: "Project Name",
    description: "Brief description of what this project does and the problem it solves.",
    image: "/placeholder.svg",  // Replace with actual project image path
    tags: ["React", "Node.js", "MongoDB"],  // Technologies used
    link: "https://github.com/yourusername/project-name",  // Project URL or GitHub repo
  },
  // Add more projects...
];
```

**To add project images:**
1. Add images to `src/assets/` folder
2. Import at top of file: `import projectImage from '@/assets/project-name.png'`
3. Use in projects array: `image: projectImage`

---

## 📧 Contact Form

**File:** `src/components/Contact.tsx`

### Email Address

**Line 28 & 36:** Update email address

```tsx
<a href="mailto:geesala.s@northeastern.edu"
// And
<div className="font-medium">geesala.s@northeastern.edu</div>
```

### Phone Number

**Line 41 & 49:** Update phone number

```tsx
<a href="tel:+14086809897"
// And
<div className="font-medium">+1 (408) 680-9897</div>
```

**Note:** The contact form currently doesn't have backend functionality. To make it work:
1. Enable Lovable Cloud (for backend functionality)
2. Or connect to a service like Formspree, EmailJS, or Netlify Forms

---

## 🎨 Color Customization

To match certifications with brand colors:

**Available gradient colors in `EnhancedCertifications.tsx`:**
- `from-red-500 to-orange-500` - Red/Orange (OSCP style)
- `from-purple-500 to-pink-500` - Purple/Pink
- `from-blue-500 to-cyan-500` - Blue/Cyan (CompTIA style)
- `from-green-500 to-teal-500` - Green/Teal (CEH/HTB style)

---

## 🚀 Quick Tips

1. **Always use real URLs** - Broken links hurt user experience
2. **Keep credential IDs accurate** - They verify your achievements
3. **Update dates regularly** - Especially for blog posts
4. **Optimize images** - Keep project images under 500KB for fast loading
5. **Test all links** - Click every external link to ensure they work

---

## ❓ Need Help?

- For design changes: Use Visual Edits (click Edit button in bottom left)
- For code questions: Ask in chat
- For deployment: Click the Publish button (top right)

---

**Last Updated:** 2025-10-15
