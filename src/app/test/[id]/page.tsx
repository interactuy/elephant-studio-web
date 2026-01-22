export default function Page({ params }: { params: { id: string } }) {
  return <div style={{ padding: 40 }}>Test: {params.id}</div>;
}
