import{_ as r,r as a,o as d,c as l,a as e,b as o,d as t,w as s,e as c}from"./app.e23cff77.js";const h={},p=e("p",null,"JailbreakMe Star is capable of jailbreaking every device on iPhone OS 3.1.2 to iOS 4.0.1 except for the iPad 1st Generation on iPhone OS 3.2.2.",-1),u=e("p",null,"JailbreakMe Star is an untethered jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore.",-1),_=e("h2",{id:"running-jailbreakme-star",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-jailbreakme-star","aria-hidden":"true"},"#"),o(" Running JailbreakMe Star")],-1),m=e("li",null,"Open Safari on your iOS device",-1),f={href:"http://jailbreakme.com",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,'Slide to the right on "Slide to Jailbreak"',-1),y=c('<p>After a couple of minutes, Cydia should be installed on your home screen.</p><h2 id="patching-cydia" tabindex="-1"><a class="header-anchor" href="#patching-cydia" aria-hidden="true">#</a> Patching Cydia</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Skip these steps if you are on iOS 4 or higher</p></div><ol><li>Open Cydia and select <code>Developer (No Filters)</code></li><li>Wait for data to reload (May take a very long time, ensure device does not go to sleep)</li><li>When prompted about essential upgrades, select <code>Complete Upgrade</code> (Again, ensure device does not go to sleep)</li><li>Once done, tap <code>Close Cydia (Restart)</code></li><li>After Cydia has restarted, wait for it to reload data and <strong>ignore any errors about untrusted server certificates</strong></li><li>Go to the sources tab, tap <code>Edit</code>, then <code>Add</code></li><li>Type in <code>http://cydia.invoxiplaygames.uk/</code>, and wait until <code>Close</code> appears in the top righthand corner</li><li>Tap on the newly added <code>IPG&#39;s Cydia Repo</code>, then tap <code>Tweaks</code>, then find <code>Cydia HTTPatch</code></li><li>Tap <code>Install</code>, then <code>Confirm</code>, then wait until <code>Close</code> appears in the top righthand corner</li><li>Cydia will close, and should now be fully patched.</li></ol>',4);function b(k,v){const n=a("ExternalLinkIcon"),i=a("router-link");return d(),l("div",null,[p,u,_,e("ol",null,[m,e("li",null,[o("Go to the "),e("a",f,[o("jailbreakme.com"),t(n)]),o(" website")]),g]),y,e("p",null,[o("You can now use Cydia to install "),t(i,{to:"/faq/#what-are-tweaks"},{default:s(()=>[o("tweaks")]),_:1}),o(", themes and more.")])])}var w=r(h,[["render",b],["__file","index.html.vue"]]);export{w as default};
