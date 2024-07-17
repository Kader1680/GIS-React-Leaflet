import ecomp from "./ecomp.json";

function Item() {
    let Features = ecomp.features;
    let wiliay = [];

    for (let index = 0; index < Features.length; index++) {
        wiliay.push({
            "name": Features[index].properties.name,
            "code": parseInt(Features[index].properties.city_code),
            "border": Features[index].geometry.coordinates,
        });
    }

    console.log(wiliay);

    const handleExport = () => {
        const jsonString = JSON.stringify(wiliay, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'wilaya.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // handleExport();
    return null;
}

export default Item;
