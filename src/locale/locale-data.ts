export const LOCALE_DATA = {

    // ========== META ==========
    description: {
        en: `This is a website about trees and plants.`,
        de: `Dies ist eine Website über Bäume und Pflanzen.`,
    },

    // ========== UI ==========
    button: {
        en: "Toggle language",
        de: "Sprache wechseln",
    },

    // ========== CONTENT ==========
    content: {
        en: `This is the content.
        Multi-line content is possible.`,
        de: `Dies ist der Inhalt.
        Mehrzeiliger Inhalt ist möglich.`,
    },

    // Function with parameters
    x_min_rem: (min:number) => ({
        de: `Es sind noch ${min} Minuten verbleibend`,
        en: `There are ${min} minutes remaining`
    }) as const,

    from_x_to_y: (x:number, y:number) => ({
        de: `Von ${x} bis ${y}`,
        en: `From ${x} to ${y}`
    }) as const,

    // Function with parameters and plural
    customer: (count:number) => ({
        de: `Kunde ${count > 1 ? "n" : ""}`,
        en: `Customer${count > 1 ? "s" : ""}`
    }) as const,

} as const;