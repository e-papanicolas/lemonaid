export default function validateEnvVar<T>(value: T | null | undefined, name: string): T {
    if (value === null || value === undefined) {
        throw new Error(`${name} is required but was not provided.`)
    }
    return value
}
