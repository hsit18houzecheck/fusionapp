export default function Dashboard() {
  return (
    <div style={{ color: "rgb(237, 237, 237)", backgroundColor: "rgb(10, 10, 10)" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: "40px 20px",
          fontFamily: 'Geist, "Geist Fallback"',
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "rgb(237, 237, 237)",
          }}
        >
          Dashboard
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "rgb(161, 161, 161)",
            marginBottom: "32px",
            lineHeight: "24px",
          }}
        >
          Welcome to your dashboard. This is a simple layout page where you can add your content.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(20, 20, 20)",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid rgb(40, 40, 40)",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "8px" }}>Card One</h3>
            <p style={{ fontSize: "14px", color: "rgb(161, 161, 161)" }}>
              Add your content here
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgb(20, 20, 20)",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid rgb(40, 40, 40)",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "8px" }}>Card Two</h3>
            <p style={{ fontSize: "14px", color: "rgb(161, 161, 161)" }}>
              Add your content here
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgb(20, 20, 20)",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid rgb(40, 40, 40)",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "8px" }}>Card Three</h3>
            <p style={{ fontSize: "14px", color: "rgb(161, 161, 161)" }}>
              Add your content here
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgb(20, 20, 20)",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid rgb(40, 40, 40)",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "12px" }}>
            Main Content Section
          </h2>
          <p style={{ fontSize: "14px", color: "rgb(161, 161, 161)", lineHeight: "20px" }}>
            This is the main content area. You can replace this with your dashboard data, charts,
            tables, or any other content you need to display.
          </p>
        </div>
      </div>
    </div>
  );
}
