export default class Blacklist {
    /*
     * https://developer.chrome.com/extensions/match_patterns
     * https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns
     */
    constructor() {
        this.patterns = [
            '*://*.2mdnsys.com/*',
            '*://*.24vunvrv.com/*',
            '*://*.33across.com/*',
            '*://*.360yield.com/*',
            //'*://*.accounts.google.com/*',
            '*://*.addthis.com/*',
            '*://*.addthisedge.com/*',
            '*://*.adf.ly/*',
            '*://*.adform.net/*',
            '*://*.admixer.net/*',
            '*://*.adxnexus.com/*',
            '*://*.adnxs.com/*',
            '*://*.adriver.ru/*',
            '*://*.adservice.google.com/*',
            '*://*.adsrvr.org/*',
            '*://*.adtrue.com/*',
            '*://*.advertising.com/*',
            '*://*.ambient-platform.com/*',
            '*://*.amung.us/*',
            '*://*.apis.google.com/*',
            '*://*.audiencerun.com/*',
            '*://*.bebi.com/*',
            '*://*.bidgear.com/*',
            '*://*.bidswitch.net/*',
            '*://*.buysellads.com/*',
            '*://*.cachefly.net/*',
            '*://*.casalemedia.com/*',
            '*://*.chatango.com/*',
            '*://*.class2deal.com/*',
            //'*://*.cloudfront.net/*',
            '*://*.cnzz.com/*',
            '*://*.cobalten.com/*',
            '*://*.connect.facebook.net/*',
            '*://*.connectad.io/*',
            '*://*.consensu.org/*',
            '*://*.contextweb.com/*',
            '*://*.contributor.google.com/*',
            '*://*.cpmstar.com/*',
            '*://*.criteo.net/*',
            '*://*.defpush.com/*',
            '*://*.digitru.st/*',
            //'*://*.discordapp.com/*',
            '*://*.doubleclick.net/*',
            '*://*.dpypzvjarj.com/*',
            '*://*.dtscout.com/*',
            '*://*.elasticad.net/*',
            '*://*.eventronbesed.info/*',
            '*://*.exosrv.com/*',
            //'*://*.facebook.com/*',
            //'*://*.facebook.net/*',
            //'*://*.fbcdn.net/*',
            '*://*.fingahvf.top/*',
            '*://*.fqtag.com/*',
            '*://*.fundingchoices.google.com/*',
            '*://*.genieessp.com/*',
            '*://*.google-analytics.com/*',
            '*://*.google.com/ads/*',
            '*://*.google.com/adsense/*',
            '*://*.googlesyndication.com/*',
            '*://*.googletagmanager.com/*',
            '*://*.googletagservices.com/*',
            //'*://*.gstatic.com/*',
            '*://*.h12-media.com/*',
            '*://*.histats.com/*',
            '*://*.hotjar.com/*',
            '*://*.ie8eamus.com/*',
            '*://*.inter1ads.com/*',
            '*://*.jeconotinhi.info/*',
            '*://*.juicyads.com/*',
            '*://*.koindut.com/*',
            '*://*.lkqd.net/*',
            '*://*.luckypushh.com/*',
            '*://*.mgid.com/*',
            '*://*.moatads.com/*',
            '*://*.mobtrks.com/*',
            '*://*.nakamasweb.com/*',
            '*://*.onclasrv.com/*',
            '*://*.onesignal.com/*',
            '*://*.outbrain.com/*',
            '*://*.outbrainimg.com/*',
            '*://*.overkirliaan.com/*',
            '*://*.passeura.com/*',
            '*://*.popcash.net/*',
            '*://*.popmonetizer.net/*',
            '*://*.propellerads.com/*',
            '*://*.propellerclick.com/*',
            '*://*.pubmatic.com/*',
            '*://*.pubmine.com/*',
            '*://*.pubpress.net/*',
            '*://*.pvclouds.com/*',
            '*://*.revcontent.com/*',
            '*://*.revrtb.net/*',
            '*://*.runative-syndicate.com/*',
            '*://*.sascdn.com/*',
            '*://*.scorecardresearch.com/*',
            '*://*.sharethis.com/*',
            '*://*.shorte.st/*',
            '*://*.sitemaji.com/*',
            '*://*.taboola.com/*',
            '*://*.tradeadexchange.com/*',
            '*://*.tynt.com/*',
            '*://*.vdo.ai/*',
            '*://*.veruta.com/*',
            '*://*.vidible.tv/*',
            '*://*.vidoomy.com/*',
            '*://*.w55c.net/*',
            '*://*.yieldbird.com/*',
            '*://*.yimg.com/*',
            '*://*.your-notice.com/*',
            '*://*.zeusadx.com/*',
            '*://*.zryydi.com/*',
        ];
    }

    addPattern( pattern ) {
        if( !this.patterns.includes( pattern ) ) {
            this.patterns.push( pattern );
        }
    }
}