const DAYS = 24 * 60 * 60 * 1000, HOURS = 60 * 60 * 1000, MINUTES = 60 * 1000, SECONDS = 1000;

const pluralise = (n: number): string => {
    return n > 1 ? 's' : '';
}

export const durationConverter = (ms: number) => {
    const d = ~~(ms / DAYS);
    const h = ~~((ms % DAYS) / HOURS);
    const m = ~~((ms % HOURS) / MINUTES);
    const s = ~~((ms % MINUTES) / SECONDS);
    return `${(d && `${d} jour${pluralise(d)} `) || ''}${((h || d) && `${h} heure${pluralise(h)} `) || ''
    }${((h || d || m) && `${m} minute${(pluralise(m))} `) || ''}${s} seconde${pluralise(s)}`;
}