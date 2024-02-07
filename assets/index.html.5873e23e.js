import{_ as t,r as a,o as n,c as r,a as e,b as o,d as i,e as s}from"./app.e23cff77.js";const d={},c=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),p=e("li",null,"A device running iOS/iPadOS 15.0 to 15.8.1",-1),h=e("li",null,"The Tips app installed to your device",-1),u={href:"http://altstore.io/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},f={href:"https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/straight-tamago/TrollMisaka/releases/latest",target:"_blank",rel:"noopener noreferrer"},T=s('<h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open AltServer</li><li>Plug your iOS device into your computer</li><li>Shift-Click (Windows) or Option-Click (macOS) AltServer in the System Tray or Menu Bar</li><li>Click <code>Sideload .ipa</code>, then select your device</li><li>Select the TrollMisaka <code>.ipa</code> file</li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The TrollMisaka application can now be opened from home screen.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you&#39;re on iOS 16.0 to 16.6.1, you&#39;ll also need to enable Developer Mode.</p><p>To do so, go into <code>Settings</code> -&gt; <code>Privacy &amp; Security</code> and then scroll down until you see <code>Developer Mode</code>, tap that option, toggle Developer Mode on, and follow the on-screen instructions</p></div><h2 id="adding-a-keyboard" tabindex="-1"><a class="header-anchor" href="#adding-a-keyboard" aria-hidden="true">#</a> Adding a Keyboard</h2><ol><li>Open TrollMisaka, then exit the app <em>while keeping it in the app switcher</em></li><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Keyboard</code> -&gt; <code>Keyboards</code> -&gt; <code>Add New Keyboard...</code></li><li>Select <code>TrollMisaka</code></li><li>Tap <code>TrollMisaka</code>, then toggle on <code>Allow Full Access</code>, then tap <code>Allow</code></li><li>Re-open TrollMisaka</li></ol><p>After re-opening TrollMisaka, open the app switcher and then reboot your device.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Do not fully close TrollMisaka until TrollStore is installed, or you will have to redo the entire guide from the beginning.</p></div><h2 id="injecting-trollstore-helper" tabindex="-1"><a class="header-anchor" href="#injecting-trollstore-helper" aria-hidden="true">#</a> Injecting TrollStore Helper</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This method may take several tries in order to work successfully.</p></div><ol><li>Unlock your device</li><li>Immediately open <code>Spotlight Search</code> (via swipping down on the middle of the home screen)</li><li>Tap the globe icon on the keyboard <ul><li>If needed, select <code>TrollMisaka</code> from the list of keyboards</li></ul></li><li>Tap <code>kopen</code><ul><li>If the device reboots, try these steps again</li></ul></li><li>Tap <code>Install TrollStore</code><ul><li>If the keyboard app seemingly refreshes, try again, If it fails, try again in Safari instead.</li></ul></li></ol><p>Once it says it&#39;s successful, you can continue with the next section.</p><h2 id="installing-trollstore" tabindex="-1"><a class="header-anchor" href="#installing-trollstore" aria-hidden="true">#</a> Installing TrollStore</h2><ol><li>Re-open the app switcher</li><li>Open the TrollMisaka app <em>from the app switcher</em></li><li>Tap <code>Install TrollStore</code></li></ol><p>Your device should respring, and TrollStore should now be installed.</p><h2 id="installing-persistence-helper" tabindex="-1"><a class="header-anchor" href="#installing-persistence-helper" aria-hidden="true">#</a> Installing Persistence Helper</h2><ol><li>Open the <code>TrollStore</code> app on your home screen</li><li>Press <code>Settings</code>, then press <code>Install Persistence Helper</code></li><li>Select <code>Tips</code> from the list of apps</li></ol>',20);function y(v,_){const l=a("ExternalLinkIcon");return n(),r("div",null,[c,e("ul",null,[p,h,e("li",null,[o("The latest version of "),e("a",u,[o("AltServer"),i(l)])]),e("li",null,[o("The latest version of "),e("a",g,[o("iTunes"),i(l)]),o(" if on Windows")]),e("li",null,[o("The latest version of "),e("a",f,[o("iCloud"),i(l)]),o(" if on Windows")]),e("li",null,[o("The latest version of "),e("a",m,[o("TrollMisaka"),i(l)])])]),T])}var k=t(d,[["render",y],["__file","index.html.vue"]]);export{k as default};
