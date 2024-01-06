export function List({ items }) {
    const listItems = [];
    items.forEach((item) => {
        listItems.push(<li>{item}</li>);
    });

    return <ul>{listItems}</ul>;
}
