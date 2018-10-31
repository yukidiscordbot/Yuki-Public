module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális", // Ezt átírhatod!
            description: "Kapsz egy kis információt a botról." // Ezt átírhatod!
        };
    }

    run(bot, m, args) {
        // Ha esetleg te is használnád a public verziót ezt NE írd át vagy szerkezd.
        m.channel.send(':white_check_mark: :information_source: :robot: A bot fejlesztése: **2018.09.11**-kén kezdőtt. A botot rengeteg dologgal zavar, mint a dizsájn, és az is hogy még mindig nincsen kész teljesen. És kösznöm szépen a **22** szervert! (Thank you for reach the **21** servers). Nos, miért **angol** a bot? Mert valamit a PRO verzióból másoltam bla-bla. Mostmár a botot megprobálom magyarra megoldani (The Pro version is in english). Ha hibát találtál azt: **SplitXPlayZ#2214** jelentheted. (Vagy a https://discord.gg/ck8kajr szerveren.)')
    }
};
