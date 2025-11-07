# 🚀 Deployment Guide for Vercel - Updated Structure

This guide explains how to deploy your ACPC Training Community platform with a centralized home page and independent session deployments.

## 📋 New Structure Overview

The platform now has a **centralized architecture**:
- **Main Home Page** (`index.html`) - Deployed separately, acts as the hub
- **Session Folders** (Array, Strings, etc.) - Each deployed independently
- **Dynamic Configuration** - Easy to add new sessions

## 🏗️ Architecture

```
Sessions Content/
├── index.html              ← Main home page (deploy separately)
├── home-styles.css         ← Styles for home page
├── DEPLOYMENT_GUIDE.md     ← This file
├── CONFIG.md               ← Quick reference
├── Array/                  ← Arrays session (deploy separately)
│   └── index.html
├── Strings/                ← Strings session (deploy separately)
│   └── index.html
└── [Future Sessions]/      ← Add new sessions here
```

## 🔧 What You'll Deploy

You'll create **3 separate Vercel projects**:

1. **Main Home Page** - From root folder (index.html)
2. **Arrays Session** - From Array folder
3. **Strings Session** - From Strings folder

## 📝 Configuration Files to Update

### 1. Main Home Page (`index.html`)

After deploying each session, update the SESSIONS array (around line 120):

```javascript
const SESSIONS = [
    {
        id: 'strings',
        name: 'Strings',
        icon: '🧵',
        description: 'Master string manipulation, traversal, and advanced techniques',
        difficulty: 'Beginner',
        lessons: '8 Sections',
        url: 'https://acpc-strings-xyz.vercel.app',  // ← UPDATE with actual Strings URL
        available: true
    },
    {
        id: 'arrays',
        name: 'Arrays',
        icon: '📊',
        description: 'Learn array fundamentals, operations, and problem-solving techniques',
        difficulty: 'Beginner',
        lessons: '10 Sections',
        url: 'https://acpc-arrays-xyz.vercel.app',  // ← UPDATE with actual Arrays URL
        available: true
    },
    // Add new sessions here...
];
```

### 2. Array Session (`Array/index.html`)

Find the configuration section (around line 1222) and update:

```javascript
const HOME_PAGE_URL = 'https://acpc-home-xyz.vercel.app';  // ← UPDATE with main home page URL
```

### 3. Strings Session (`Strings/index.html`)

Find the configuration section (around line 1442) and update:

```javascript
const HOME_PAGE_URL = 'https://acpc-home-xyz.vercel.app';  // ← UPDATE with main home page URL
```

---

## 📝 Step-by-Step Deployment Process

### Step 1: Deploy the Main Home Page

1. **Create a new Vercel project:**
   - Name it something like `acpc-home` or `acpc-training-hub`
   
2. **Deploy the root files:**
   - Upload ONLY these files to Vercel:
     - `index.html`
     - `home-styles.css`
   
3. **Get your home page URL:**
   - Example: `https://acpc-home.vercel.app`
   - Save this URL, you'll need it!

### Step 2: Deploy Arrays Session

1. **Create a new Vercel project:**
   - Name it `acpc-arrays` or similar
   
2. **Deploy the Array folder:**
   - Upload the entire `Array/` folder to Vercel
   
3. **Get your Arrays URL:**
   - Example: `https://acpc-arrays.vercel.app`
   
4. **Update configuration:**
   - Edit `Array/index.html` - update `HOME_PAGE_URL` with your home page URL from Step 1
   - Redeploy to Vercel

### Step 3: Deploy Strings Session

1. **Create a new Vercel project:**
   - Name it `acpc-strings` or similar
   
2. **Deploy the Strings folder:**
   - Upload the entire `Strings/` folder to Vercel
   
3. **Get your Strings URL:**
   - Example: `https://acpc-strings.vercel.app`
   
4. **Update configuration:**
   - Edit `Strings/index.html` - update `HOME_PAGE_URL` with your home page URL from Step 1
   - Redeploy to Vercel

### Step 4: Update Main Home Page

Now that you have all the session URLs:

1. **Edit `index.html`:**
   - Update the SESSIONS array with your actual URLs
   - Update the `arrays` session URL
   - Update the `strings` session URL

2. **Redeploy the home page:**
   - Push changes to Vercel

### Step 5: Test Everything

1. **Visit main home page:** `https://acpc-home.vercel.app`
2. **Click Arrays** → Should go to Arrays session
3. **Click Home button** → Should return to main home
4. **Visit main home again**
5. **Click Strings** → Should go to Strings session
6. **Click Home button** → Should return to main home

---

## 🎯 Quick Reference

| File | What to Update | Example Value |
|------|---------------|---------------|
| `index.html` (root) | SESSIONS array - `arrays.url` | `https://acpc-arrays.vercel.app` |
| `index.html` (root) | SESSIONS array - `strings.url` | `https://acpc-strings.vercel.app` |
| `Array/index.html` | `HOME_PAGE_URL` | `https://acpc-home.vercel.app` |
| `Strings/index.html` | `HOME_PAGE_URL` | `https://acpc-home.vercel.app` |

---

## ✅ Verification Checklist

- [ ] Main home page deployed to Vercel
- [ ] Arrays session deployed to Vercel
- [ ] Strings session deployed to Vercel
- [ ] Updated `index.html` with Arrays URL
- [ ] Updated `index.html` with Strings URL
- [ ] Updated `Array/index.html` with home page URL
- [ ] Updated `Strings/index.html` with home page URL
- [ ] Tested: Home → Arrays → Home
- [ ] Tested: Home → Strings → Home
- [ ] All session cards appear correctly on home page

---

## 🔄 Using Git for Automatic Deployment

If you're using Git with Vercel:

1. Create two separate repositories (or use a monorepo with separate Vercel projects)
2. Set up automatic deployments in Vercel
3. Update the configuration URLs
4. Commit and push - Vercel will automatically redeploy

---

## 💡 Tips

- **Test locally first:** Always test your changes locally before deploying
- **Keep backups:** Save the original URLs in case you need to revert
- **Use environment variables (optional):** For advanced users, you can use Vercel environment variables instead of hardcoded URLs
- **Custom domains:** If you use custom domains (e.g., `arrays.acpc.com`), use those instead of the Vercel URLs

---

## 🆘 Troubleshooting

**Problem:** Links are broken after deployment

**Solution:** Double-check that:
1. The URLs are exactly correct (no trailing slashes unless intended)
2. The configuration was updated in ALL 4 files
3. You redeployed after making the changes

**Problem:** Home button doesn't work

**Solution:** The home button points to `home.html` within the same deployment, which is correct. Each session has its own home page.

---

**Happy Deploying! 🎉**

If you have any questions, feel free to reach out to the ACPC Training Community team.

