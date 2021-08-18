export default function Car({item}) {
    return (
        <div className={'car'}>
            <div>{item.id}</div>
            <div>{item.model}</div>
            <div>{item.price}</div>
            <div>{item.year}</div>
        </div>
    );
}