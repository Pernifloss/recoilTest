import {durationConverter} from "./durationFormatter";

const DAYS = 24 * 60 * 60 * 1000, HOURS = 60 * 60 * 1000, MINUTES = 60 * 1000, SECONDS = 1000;
it('sums numbers', () => {

    expect(durationConverter(SECONDS))
        .toEqual("1 seconde");
    expect(durationConverter(0))
        .toEqual("0 seconde");
    expect(durationConverter(3 * SECONDS))
        .toEqual("3 secondes");

    expect(durationConverter(60 * 1000))
        .toEqual("1 minute 0 seconde");
    expect(durationConverter(2 * MINUTES + 14 * SECONDS))
        .toEqual("2 minutes 14 secondes");


    expect(durationConverter(HOURS))
        .toEqual("1 heure 0 minute 0 seconde");
    expect(durationConverter(4 * HOURS + MINUTES * 20 + 3 * SECONDS))
        .toEqual("4 heures 20 minutes 3 secondes");

    expect(durationConverter(DAYS))
        .toEqual("1 jour 0 heure 0 minute 0 seconde");
    expect(durationConverter(97 * DAYS + 4 * HOURS + MINUTES * 20 + 3 * SECONDS))
        .toEqual("97 jours 4 heures 20 minutes 3 secondes");

});