type Helloprops = {
    name: string;
};

export function Hello({name}: Helloprops) {
    return <h2>Hei, {name} 👋</h2>
}