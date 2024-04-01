const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/HomePage'>/HomePage</a></td>
            <td style={tableCellStyle}><a href='/HomePage'>Home page</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/PluginFileCover1'>/PluginFileCover1</a></td>
            <td style={tableCellStyle}><a href='/PluginFileCover1'>Plugin / file cover - 1</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}