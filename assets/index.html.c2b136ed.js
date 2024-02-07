import{_ as s,r as n,o as c,c as d,a as e,b as i,d as o,w as t,e as r}from"./app.e23cff77.js";const u={},p=r('<h2 id="bootloop-e-respring-loop" tabindex="-1"><a class="header-anchor" href="#bootloop-e-respring-loop" aria-hidden="true">#</a> Bootloop e respring loop</h2><h3 id="respring-loop" tabindex="-1"><a class="header-anchor" href="#respring-loop" aria-hidden="true">#</a> Respring Loop</h3><p>Un respring loop \xE8 sintomo di uno o pi\xF9 tweak incompatibili, che causano il blocco del dispositivo mentre sei in uno stato jailbroken.</p><p>Mentre non c&#39;\xE8 modo semplice per diagnosticare ci\xF2 che provoca un respring loop, la colpa pi\xF9 probabile \xE8 il tweak pi\xF9 recente installato/aggiornato che risulta incompatibile con la tua versione di iOS o un altro tweak.</p><h4 id="jailbreak-semi-un-tethered" tabindex="-1"><a class="header-anchor" href="#jailbreak-semi-un-tethered" aria-hidden="true">#</a> Jailbreak semi-(un)tethered</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Un jailbreak semi-tethered \xE8 un jailbreak che ha bisogno di un&#39;app su un computer per eseguire il jailbreak dopo un riavvio.</p><p>Un jailbreak semi-untethered \xE8 un jailbreak che ha bisogno di un&#39;app o di un sito web per eseguire il jailbreak dopo un riavvio.</p></div><p>Per uscire da un respring loop, <a href="#How-to-exit-dfu-mode">riavvia forzatamente il tuo dispositivo</a>. Una volta riavviato, disabilita l&#39;iniezione dei tweak dalle impostazioni dell&#39;app di jailbreak. Una volta che sei jailbroken, dovresti essere in grado di accedere al gestore dei pacchetti e rimuovere il tweak pi\xF9 recente o l&#39;ultima modifica delle impostazioni di un tweak che potrebbe aver causato il respring loop.</p>',7),h={href:"https://discord.gg/jb",target:"_blank",rel:"noopener noreferrer"},m=r('<h4 id="jailbreak-untethered" tabindex="-1"><a class="header-anchor" href="#jailbreak-untethered" aria-hidden="true">#</a> Jailbreak untethered</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Un jailbreak untethered \xE8 un jailbreak che persiste dopo un riavvio</p></div><p>Un respring loop su un jailbreak untethered \xE8 molto facile da confondere con un bootloop, dal momento che anche al riavvio del dispositivo il respring loop persister\xE0.</p><p>Per uscire da un potenziale respring loop, \xE8 necessario <a href="#How-to-exit-dfu-mode">riavviare forzatamente</a> il dispositivo e tenere premuto il Volume Su, siccome la tempistica varia a seconda dei jailbreak, la cosa migliore \xE8 tenere premuto Volume Su fino a quando non si avvia iOS.</p><p>Anche se dopo aver tentato di fare ci\xF2 pi\xF9 volte non \xE8 possibile avviare iOS tenendo premuto il Volume Su; potresti essere in un <a href="#Bootloops">bootloop</a>.</p><h3 id="bootloop" tabindex="-1"><a class="header-anchor" href="#bootloop" aria-hidden="true">#</a> Bootloop</h3><p>Un bootloop \xE8 un errore irrecuperabile causato dai file di sistema corrotti o un errore hardware. Anche se molto pi\xF9 raro nelle versioni moderne di iOS, \xE8 comunque possibile imbattersi in un bootloop.</p><p>Un bootloop pu\xF2 essere riconosciuto dal fatto che il logo Apple appaia costantemente, anche dopo aver eseguito un riavvio forzato del dispositivo.</p><p>Per uscire da un bootloop \xE8 necessario ripristinare il dispositivo in DFU mode.</p><h2 id="come-entrare-in-modalita-dfu" tabindex="-1"><a class="header-anchor" href="#come-entrare-in-modalita-dfu" aria-hidden="true">#</a> Come entrare in modalit\xE0 DFU</h2><h4 id="per-i-dispositivi-con-un-pulsante-home-fisico-iphone-6s-e-precedenti" tabindex="-1"><a class="header-anchor" href="#per-i-dispositivi-con-un-pulsante-home-fisico-iphone-6s-e-precedenti" aria-hidden="true">#</a> Per i dispositivi con un pulsante home fisico (iPhone 6s e precedenti):</h4><ol><li>Tieni premuto il tasto Home e Power.</li><li>Dopo 8 secondi, rilascia il tasto Power e continua a tenere premuto il tasto Home.</li></ol><h4 id="per-iphone-7-7-ipod-7th-gen-e-gli-ipad-del-2018" tabindex="-1"><a class="header-anchor" href="#per-iphone-7-7-ipod-7th-gen-e-gli-ipad-del-2018" aria-hidden="true">#</a> Per iPhone 7/7+, iPod 7th Gen e gli iPad del 2018:</h4><ol><li>Accendi il tuo iPhone/iPad se non lo \xE8 gi\xE0</li><li>Connettilo al tuo computer con un cavo USB</li><li>Avvia iTunes (o Finder su macOS Catalina e pi\xF9 recenti) e controlla che l&#39;iPhone/iPad sia riconosciuto</li><li>Tieni premuti i tasti Volume Gi\xF9 e Accensione.</li><li>Dopo 8 secondi, rilascia il tasto Power e continua a tenere premuto il tasto Home.</li></ol><h4 id="per-dispositivi-senza-tasto-home-iphone-8-8-ipad-air-5-e-ipad-mini-6" tabindex="-1"><a class="header-anchor" href="#per-dispositivi-senza-tasto-home-iphone-8-8-ipad-air-5-e-ipad-mini-6" aria-hidden="true">#</a> Per dispositivi senza tasto Home, iPhone 8/8+, iPad Air 5 e iPad Mini 6:</h4><ol><li>Accendi il tuo iPhone/iPad se non lo \xE8 gi\xE0</li><li>Connettilo al tuo computer con un cavo USB</li><li>Avvia iTunes (o Finder su macOS Catalina e pi\xF9 recenti) e controlla che l&#39;iPhone/iPad sia riconosciuto</li><li>Premi il tasto Volume Su immediatamente seguito dal tasto Volume Gi\xF9</li><li>Premi e tieni premuto il tasto Accensione fino a quando lo schermo diventa nero</li><li>Rilascia il tasto Accensione</li><li>Immediatamente dopo, tieni premuto il tasto Accensione e il tasto Volume gi\xF9 per 5 secondi</li><li>Rilascia il tasto Accensione ma continua a tener premuto il tasto Volume Gi\xF9 per altri 5 secondi</li></ol><h2 id="come-uscire-dalla-modalita-dfu" tabindex="-1"><a class="header-anchor" href="#come-uscire-dalla-modalita-dfu" aria-hidden="true">#</a> Come uscire dalla modalit\xE0 DFU</h2><h4 id="per-i-dispositivi-con-un-pulsante-home-fisico-iphone-6s-e-precedenti-1" tabindex="-1"><a class="header-anchor" href="#per-i-dispositivi-con-un-pulsante-home-fisico-iphone-6s-e-precedenti-1" aria-hidden="true">#</a> Per i dispositivi con un pulsante home fisico (iPhone 6s e precedenti):</h4><p>Tieni premuto il tasto Home e il tasto Accensione fino al riavvio del dispositivo.</p><h4 id="per-iphone-7-7-ipod-7th-gen-e-gli-ipad-del-2018-1" tabindex="-1"><a class="header-anchor" href="#per-iphone-7-7-ipod-7th-gen-e-gli-ipad-del-2018-1" aria-hidden="true">#</a> Per iPhone 7/7+, iPod 7th Gen e gli iPad del 2018:</h4><p>Tieni premuto il tasto Accensione e il tasto Volume Gi\xF9 fino al riavvio del dispositivo.</p><h4 id="per-dispositivi-senza-tasto-home-iphone-8-8-ipad-air-5-e-ipad-mini-6-1" tabindex="-1"><a class="header-anchor" href="#per-dispositivi-senza-tasto-home-iphone-8-8-ipad-air-5-e-ipad-mini-6-1" aria-hidden="true">#</a> Per dispositivi senza tasto Home, iPhone 8/8+, iPad Air 5 e iPad Mini 6:</h4><ol><li>Premi rapidamente il tasto Volume su</li><li>Premi rapidamente il tasto Volume gi\xF9</li><li>Tieni premuto il tasto Accensione fino al riavvio del dispositivo.</li></ol><h2 id="errori-comuni-su-chimera-odyssey-e-taurine" tabindex="-1"><a class="header-anchor" href="#errori-comuni-su-chimera-odyssey-e-taurine" aria-hidden="true">#</a> Errori comuni su Chimera, Odyssey e Taurine</h2><h3 id="err-jailbreak" tabindex="-1"><a class="header-anchor" href="#err-jailbreak" aria-hidden="true">#</a> ERR_Jailbreak</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Se riscontri questo problema mentre usi taurine-permanent, segui <a href="#ERR_Jailbreak-when-using-taurine-permanent">ERR_Jailbreak quando si utilizza taurine-permanent</a>.</p></div><p>Questo \xE8 causato dal fatto di aver usato un altro jailbreak prima di Taurine. Per risolvere questo problema, \xE8 necessario ripristinare il rootfs:</p><ol><li>Riavvia il dispositivo.</li><li>Apri l&#39;app di Odyssey o Taurine, a seconda della tua versione iOS.</li><li>Attiva l&#39;opzione <code>Restore Rootfs</code></li><li>Premi su Jailbreak.</li></ol><p>Una volta che il ripristino del rootfs sar\xE0 completato con successo, prova di nuovo ad eseguire il jailbreak.</p><h3 id="err-already-jailbroken-e-err-kernrw-taurine-err-tfp0-odyssey" tabindex="-1"><a class="header-anchor" href="#err-already-jailbroken-e-err-kernrw-taurine-err-tfp0-odyssey" aria-hidden="true">#</a> ERR_Already_Jailbroken e ERR_KernRW (Taurine)/ERR_TFP0 (Odyssey)</h3><p><code>ERR_Already_Jailbroken</code> indica che il processo di jailbreak \xE8 stato interrotto. <code>ERR_KernRW</code> e <code>ERR_TFP0</code> indicano che l&#39;exploit non \xE8 riuscito. Entrambi possono essere risolti nello stesso modo:</p><ol><li>Riavvia il dispositivo.</li><li>Apri l&#39;app di Odyssey o Taurine, a seconda della tua versione iOS.</li><li>Premi su Jailbreak.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>I Jailbreak non hanno quasi mai un successo del 100%, potrebbe essere necessario riprovare ad eseguire il jailbreak pi\xF9 volte</p></div><h3 id="installation-error-dopo-aver-aperto-sileo-per-la-prima-volta-con-odyssey-1-4-2" tabindex="-1"><a class="header-anchor" href="#installation-error-dopo-aver-aperto-sileo-per-la-prima-volta-con-odyssey-1-4-2" aria-hidden="true">#</a> &quot;Installation Error&quot; dopo aver aperto Sileo per la prima volta con Odyssey 1.4.2</h3>',34),v={href:"https://theodyssey.dev",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"impossibilita-di-aprire-newterm-o-cr4shed-dopo-un-po-di-tempo-che-si-utilizza-taurine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#impossibilita-di-aprire-newterm-o-cr4shed-dopo-un-po-di-tempo-che-si-utilizza-taurine","aria-hidden":"true"},"#"),i(" Impossibilit\xE0 di aprire NewTerm o Cr4shed dopo un po' di tempo che si utilizza Taurine")],-1),g=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[i("Se ti trovi su 14.3 o successivi "),e("em",null,"oppure"),i(" hai un dispositivo A12 o pi\xF9 recente, \xE8 probabile che il dispositivo si sia riavviato (il che significa che non sei pi\xF9 in uno stato Jailbroken) o potresti avere qualche altro problema non causato dal jailbreak.")])],-1),f=e("p",null,[i("Se ti trovi su 14.0-14.3 "),e("em",null,"e"),i(" su un dispositivo A11 o precedente, questo problema \xE8 causato dal fatto che alcuni tweak e applicazioni utilizzano delle librerie che hanno dei componenti che possono avviarsi prima del jailbreak, ci\xF2 \xE8 in grado di interrompere il codesigning. Quando ci\xF2 accade, i tweak e le applicazioni che utilizzano queste librerie non possono essere utilizzate.")],-1),z=e("h3",{id:"err-jailbreak-quando-si-utilizza-taurine-permanent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#err-jailbreak-quando-si-utilizza-taurine-permanent","aria-hidden":"true"},"#"),i(" ERR_Jailbreak quando si utilizza taurine-permanent")],-1),k=e("p",null,"Aggiorna all'ultima versione di taurine-permanent.",-1),_=e("h3",{id:"sileo-non-compare-nella-home-screen-dopo-aver-eseguito-il-jailbreak-per-la-prima-volta-su-chimera-1-6-1-o-taurine-1-1-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sileo-non-compare-nella-home-screen-dopo-aver-eseguito-il-jailbreak-per-la-prima-volta-su-chimera-1-6-1-o-taurine-1-1-2","aria-hidden":"true"},"#"),i(" Sileo non compare nella home screen dopo aver eseguito il jailbreak per la prima volta su Chimera 1.6.1 o Taurine 1.1.2")],-1),S={href:"https://chimera.coolstar.org/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://taurine.app/",target:"_blank",rel:"noopener noreferrer"},w=r('<h2 id="errori-comuni-su-unc0ver" tabindex="-1"><a class="header-anchor" href="#errori-comuni-su-unc0ver" aria-hidden="true">#</a> Errori comuni su unc0ver</h2><h3 id="problemi-generali-con-unc0ver-su-ios-14" tabindex="-1"><a class="header-anchor" href="#problemi-generali-con-unc0ver-su-ios-14" aria-hidden="true">#</a> Problemi generali con unc0ver su iOS 14</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Mentre questi problemi sono generalmente i pi\xF9 frequenti su iOS 14, alcuni problemi potrebbero essere presenti anche su versioni precedenti di iOS</p></div><p>Durante l&#39;utilizzo di unc0ver su iOS 14, \xE8 molto comune imbattersi in questi problemi:</p><ul><li>Le applicazioni si bloccano quando si tenta di avviarle</li><li>Vari problemi relativi all&#39;app store (inclusa l&#39;incapacit\xE0 di scaricare app o effettuare acquisti in app)</li><li>Non riuscire a ricevere chiamate mentre si \xE8 jailbroken</li><li>Problemi mentre si utilizzano i dati mobili (come non essere in grado di caricare pagine web o altri servizi online)</li><li>Impossibile salvare, scattare o visualizzare screenshot</li><li>Safari non carica le pagine o le ricarica infinitamente</li><li>La sezione di condivisione non funziona correttamente</li><li>Problemi di connessione con Carplay.</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se stai usando Fugu14 per avere unc0ver firmato in modo permanente, si possono sperimentare questi problemi in misura maggiore, cos\xEC come alcuni problemi esclusivi di Fugu14, come:</p><ul><li>L&#39;incapacit\xE0 di visualizzare le statistiche della batteria</li><li>Kernel panic pi\xF9 frequenti e casuali</li></ul></div><p>Per risolvere <strong>temporaneamente</strong> questi problemi, esegui uno userspace reboot digitando <code>launchctl reboot userspace</code> in un&#39;app terminale (ad esempio NewTerm) sul tuo dispositivo.</p><h3 id="rootfs-already-mounted" tabindex="-1"><a class="header-anchor" href="#rootfs-already-mounted" aria-hidden="true">#</a> rootFS already mounted</h3><ol><li>Apri l&#39;app delle Impostazioni</li><li>Vai su <code>Generali</code> -&gt; <code>Spazio iX</code><ul><li>Potrebbe apparire come <code>Spazio iPhone</code>, <code> Spazio iPad</code> o <code>Spazio iPod</code></li></ul></li><li>Scorri fino all&#39;Aggiornamento di Sistema scaricato e tocca su di esso</li><li>Clicca su <code>Elimina</code></li><li>Riesegui unc0ver</li></ol><p>Se ancora non riesci a risolvere, o non c&#39;\xE8 nessun aggiornamento scaricato, potrebbe essere necessario scaricare l&#39;aggiornamento OTA ed eliminarlo nuovamente. Prova le seguenti indicazioni:</p><ol><li>Apri l&#39;applicazione di unc0ver</li><li>Tocca l&#39;icona delle impostazioni nell&#39;angolo in alto a destra</li><li>Deseleziona tutte le opzioni</li><li>Abilita <code>Restore RootFS</code></li><li>Clicca su <code>Done</code> nell&#39;angolo in alto a destra</li><li>Vai nella sezione dove si esegue il jailbreak e clicca su <code>Restore RootFS</code><ul><li>Se appare <code>Jailbreak</code>, torna indietro e controlla che <code>Restore RootFS</code> sia l&#39;unica opzione abilitata</li></ul></li><li>Quando viene richiesto il ripristino, premi <code>OK</code><ul><li>Questo potrebbe richiedere un po&#39; di tempo</li><li>Se fallisce, riprova dall&#39;inizio</li></ul></li><li>Quando finito, tocca di nuovo <code>OK</code> e il dispositivo verr\xE0 riavviato</li><li>Apri l&#39;app delle Impostazioni</li><li>Vai su <code>Generali</code> -&gt; <code>Aggiornamento Software</code></li><li>Scarica l&#39;aggiornamento del software ma <strong>non installarlo</strong></li><li>Torna a <code>Generale</code></li><li>Una volta scaricato, vai su <code>Spazio iX</code><ul><li>Potrebbe apparire come <code>Spazio iPhone</code>, <code> Spazio iPad</code> o <code>Spazio iPod</code></li></ul></li><li>Scorri fino all&#39;Aggiornamento di Sistema scaricato e tocca su di esso</li><li>Clicca su <code>Elimina</code></li><li>Scorri fino all&#39;applicazione unc0ver e cliccaci sopra</li><li>Clicca su <code>Elimina</code></li><li><a href="/installing-unc0ver">Installa unc0ver</a> di nuovo, ma non eseguirlo</li><li>Attiva la modalit\xE0 aereo ed esegui il jailbreak <ul><li>Questo pu\xF2 richiedere diversi tentativi, continua a provare fino a quando non funziona</li></ul></li></ol>',11),y={class:"custom-container tip"},A=e("p",{class:"custom-container-title"},"TIP",-1),q={href:"https://discord.gg/jb",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"non-essere-in-grado-di-rieseguire-il-jailbreak-o-ripristinare-il-rootfs-su-unc0ver-dopo-aver-utilizzato-tweak-come-batchomatic-o-iamlazy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#non-essere-in-grado-di-rieseguire-il-jailbreak-o-ripristinare-il-rootfs-su-unc0ver-dopo-aver-utilizzato-tweak-come-batchomatic-o-iamlazy","aria-hidden":"true"},"#"),i(" Non essere in grado di rieseguire il jailbreak o ripristinare il rootfs su unc0ver dopo aver utilizzato tweak come Batchomatic o IAmLazy")],-1),j=e("p",null,"La tua possibilit\xE0 di risolvere questo problema dipende dalla tua versione di iOS:",-1),R=e("li",null,"Se sei su iOS 14.4-14.5.1, prova a ripristinare il rootfs nell'app di Fugu14",-1),T=e("li",null,"Se sei su iOS 14.6-14.8, le tue opzioni sono quelle di attendere un aggiornamento di unc0ver che risolve questo problema, o ripristinare il dispositivo in modalit\xE0 DFU all'ultima versione di iOS e perdere la capacit\xE0 di eseguire il jailbreak fino a quando non ne uscir\xE0 uno",-1),O=e("h2",{id:"correggere-gli-errori-di-installazione-dei-pacchetti-su-sileo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#correggere-gli-errori-di-installazione-dei-pacchetti-su-sileo","aria-hidden":"true"},"#"),i(" Correggere gli errori di installazione dei pacchetti su Sileo")],-1),C=e("p",null,"Ai fini di questa sezione di risoluzione dei problemi, stiamo supponendo che usate Sileo su Taurine/Odysseyra1n.",-1),E=e("p",null,[i("Per determinare quale errore si sta incontrando, dovrai cliccare su "),e("code",null,"Mostra Dettagli"),i(" su Sileo quando riscontri un errore durante l'installazione o la rimozione di un pacchetto.")],-1),I={href:"https://discord.gg/Sileo",target:"_blank",rel:"noopener noreferrer"},F=r('<h3 id="syntax-error-unexpected" tabindex="-1"><a class="header-anchor" href="#syntax-error-unexpected" aria-hidden="true">#</a> Syntax error: &quot;(&quot; unexpected</h3><p>Questo errore indica che lo sviluppatore del tweak che stai cercando di installare/rimuovere ha scritto lo script di installazione/rimozione in modo errato. Avrai bisogno di Filza per risolvere questo problema.</p><h4 id="rimozione-del-tweak-che-causa-questo-errore" tabindex="-1"><a class="header-anchor" href="#rimozione-del-tweak-che-causa-questo-errore" aria-hidden="true">#</a> Rimozione del tweak che causa questo errore</h4><ol><li>Apri Filza e vai su <code>/Library/dpkg/info</code></li><li>Trova il file .postinst o .postrm corrispondente al tweak che riporta un errore, ad esempio <code>com.miro.shortmoji2. postinst</code> sarebbe il file da modificare se ShortMoji 2 riportasse un errore di installazione o <code>com. miro.shortmoji2.postrm</code> se riportasse un errore di disinstallazione</li><li>Tocca e tieni premuto il file finch\xE9 non appare un menu</li><li>Premi <code>Apri con</code></li><li>Premi <code>Editor di testo</code></li><li>Trova la prima riga del file che dice <code>#!/bin/sh</code></li><li>Sostituisci <code>sh</code> con <code>bash</code></li><li>Clicca su <code>Salva</code></li><li>Apri Sileo</li><li>Disinstalla il tweak. <ul><li>Per i tweak a pagamento, \xE8 necessario inviare una segnalazione di un bug allo sviluppatore se si desidera installare il tweak.</li><li>Per i tweak gratuiti, dovresti inviare una segnalazione di un bug allo sviluppatore. Se desideri installare immediatamente il tweak, continua con questa guida.</li></ul></li></ol><h4 id="modificare-il-tweak-per-correggere-l-errore-solo-tweak-gratuiti" tabindex="-1"><a class="header-anchor" href="#modificare-il-tweak-per-correggere-l-errore-solo-tweak-gratuiti" aria-hidden="true">#</a> Modificare il tweak per correggere l&#39;errore (solo tweak gratuiti)</h4>',5),D={href:"https://parcility.co",target:"_blank",rel:"noopener noreferrer"},V=r("<li>Cerca il tweak che vuoi installare <ul><li>Se non appare nella ricerca, dovrai aspettare che lo sviluppatore aggiorni il proprio tweak</li></ul></li><li>Clicca su <code>Download</code></li><li>Una volta terminato il download del file, clicca sul file nel menu dei download di Safari</li><li>Clicca sul tasto di condivisione</li><li>Clicca <code>Salva su Filza</code></li><li>Clicca su <code>Salva</code></li><li>Apri Filza, si aprir\xE0 nella cartella in cui hai scaricato il file del tweak</li><li>Tocca il tweak che desideri correggere</li><li>Scorri verso il basso e tocca <code>Estrai</code></li><li>Apri la cartella estratta e vai a <code>DEBIAN</code></li><li>Ripeti i passaggi 2-8 di <code>Rimozione del tweak che causa questo errore</code> sopra</li><li>Torna alla cartella in cui hai scaricato il tweak</li><li>Tocca e tieni premuta la cartella del tweak</li><li>Premi <code>Crea DEB</code></li><li>Tocca e tieni premuto il file deb ottenuto</li><li>Premi <code>Apri con</code></li><li>Clicca su <code>Sileo</code></li><li>Clicca su <code>Installa</code></li>",18),U=r('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Alcuni sviluppatori nella community del Jailbreak mettono una call alla shell sbagliata nei loro script di installazione/rimozione. Fino Ad Aprile 2021, la maggior parte dei Jailbreak puntavano <code>/bin/sh</code> su <code>/bin/bash</code> cos\xEC gli sviluppatori sono stati in grado di utilizzare <code>#!/bin/sh</code> per indicare quale shell usare anche se usano le funzioni di Bash. Nell&#39;aprile 2021, Procursus, che viene utilizzaro su Chimera, Odyssey, Taurine e Odysseyra1n, ha iniziato ad usare una shell differente con prestazioni pi\xF9 elevate. Ci\xF2 ha provocato in non funzionamento di questi script formattati in modo errato.</p></div><h3 id="exec-format-error" tabindex="-1"><a class="header-anchor" href="#exec-format-error" aria-hidden="true">#</a> Exec format error</h3><p>Questo errore indica che lo sviluppatore del tweak che stai cercando di installare/rimuovere omesso una parte fondamentale durante la scrittura dello script di installazione/rimozione. Avrai bisogno di Filza per risolvere questo problema.</p><h4 id="rimozione-del-tweak-che-causa-questo-errore-1" tabindex="-1"><a class="header-anchor" href="#rimozione-del-tweak-che-causa-questo-errore-1" aria-hidden="true">#</a> Rimozione del tweak che causa questo errore</h4><ol><li>Apri Filza e vai su <code>/Library/dpkg/info</code></li><li>Trova il file .postinst o .postrm corrispondente al tweak che riporta un errore, ad esempio <code>com.miro.shortmoji2. postinst</code> sarebbe il file da modificare se ShortMoji 2 riportasse un errore di installazione</li><li>Tocca e tieni premuto il file finch\xE9 non appare un men\xF9.</li><li>Premi <code>Apri con</code></li><li>Premi <code>Editor di testo</code></li><li>Aggiungi una nuova riga all&#39;inizio del file che dice <code>#!/bin/bash</code>.</li><li>Clicca su <code>Salva</code></li><li>Apri Sileo</li><li>Disinstalla il tweak.</li><li>Naviga fino alla sezione <code>Sorgenti</code></li><li>Esegui uno swipe verso il basso per aggiornare le sorgenti</li><li>Naviga fino alla sezione <code>Cerca</code></li><li>Digita <code>libiosexec1</code> nel campo Ricerca</li><li>Installa <code>libiosexec1</code> di Hayden Seay</li><li>Prova a installare nuovamente il tweak che causava un errore</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Nel maggio 2021, Procursus ha tentato di migrare a una versione di dpkg che non gestisce pi\xF9 questo errore di installazione, gli sviluppatori avrebbero dovuto includere <code>#! bin/sh</code> o <code>#!/bin/bash</code> nei loro script. Al momento della scrittura, lo sviluppatore principale di Procursus ha creato una patch, <code>libiosexec</code>, che riaggiunge questa gestione degli errori. Se continui a riscontrare questo errore, potresti non aver aggiornato i pacchetti da un po&#39;.</p></div>',6);function J(N,B){const a=n("ExternalLinkIcon"),l=n("router-link");return c(),d("div",null,[p,e("p",null,[i("In uno scenario peggiore, in cui non \xE8 possibile diagnosticare o risolvere il problema, chiedi supporto nel "),e("a",h,[i("server discord di r/jailbreak"),o(a)]),i(" o ripristina il rootFS.")]),m,e("p",null,[i("Rimuovi la versione attualmente installata di Odyssey, esegui il sideload dell'"),e("a",v,[i("ultima versione di Odyssey"),o(a)]),i(", ripristina il rootfs e poi esegui nuovamente il jailbreak.")]),b,g,f,e("p",null,[i("La soluzione pi\xF9 facile a questo problema \xE8 quella di riavviare il dispositivo e ri-eseguire ol jailbreak. In alternativa, se non vuoi che questo problema accada, puoi eseguire il jailbreak con "),o(l,{to:"/installing-odysseyra1n"},{default:t(()=>[i("Odysseyra1n")]),_:1}),i(", siccome Taurine e Odysseyra1n sono entrambi intercompatibili fra loro e Odysseyra1n non \xE8 influenzato da questo problema.")]),z,k,_,e("ul",null,[e("li",null,[i("Se hai questo problema su Chimera, usa "),e("a",S,[i("l'ultima versione di Chimera"),o(a)])]),e("li",null,[i("Se riscontri questo problema su Taurine, usa "),e("a",P,[i("l'ultima versione di Taurine"),o(a)])])]),w,e("div",y,[A,e("p",null,[i("Se non funziona, chiedi supporto sul "),e("a",q,[i("Server Discord"),o(a)]),i(" di r/Jailbreak.")])]),x,j,e("ul",null,[e("li",null,[i("Se sei su iOS 14.3 o inferiore (tranne se sei su 11.x o su A12(X) con 12.1.3-12.4.1), segui un'altra guida per ripristinare "),o(l,{to:"/it_IT/restoring-rootfs"},{default:t(()=>[i("il RootFS")]),_:1}),i(" che sia supportata dal tuo dispositivo/versione di ios.")]),R,T]),O,C,E,e("p",null,[i("Se le risoluzioni qui sotto non funzionano, puoi chiedere supporto sul "),e("a",I,[i("Server Discord"),o(a)]),i(" di Sileo.")]),F,e("ol",null,[e("li",null,[i("Apri "),e("a",D,[i("Parcility"),o(a)]),i(" su Safari nel tuo dispositivo")]),V]),U])}var L=s(u,[["render",J],["__file","index.html.vue"]]);export{L as default};
