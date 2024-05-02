type Dictionary = { created: Date } & { [arg: string]: string | string[] };

const dict: Dictionary = { created: new Date() };