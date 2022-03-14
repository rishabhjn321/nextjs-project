export function getAsString(value?: string|string[]| undefined): string | undefined {
    if(Array.isArray(value)) {
        return value[0]; // returning first element in array
    }
    if(value)
        {return value;}
}