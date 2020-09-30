export default function ProductGridItem({ product }) {
    return (
        <div>
            <span>{product.id}</span>
            <p>{product.name}</p>
        </div>
    )
}
