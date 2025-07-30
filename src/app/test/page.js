import { searchProperties } from "@/lib/bayutApi";

export default async function TestPage() {
    const data = await searchProperties();

    return (
        <div>
            <h1>Test API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}