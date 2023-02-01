export function classNames(cls, additional) {
    return [
        cls,
        ...additional,
    ].join(' ');
}