import '../styles/App.css';
function Content() {
  return (
    <>
      <div className="content-container">
        <h2 className="section-title">Implementation of QUIC Protocol</h2>
        <ul className="quic-features">
          <li>
            <strong>Connection Establishment and Handshake:</strong>
            <p>
              QUIC unifies transport and security layers (TCP and TLS). It performs faster handshakes by exchanging Initial and Handshake packets, completing authentication with TLS 1.3.
            </p>
          </li>
          <li>
            <strong>Multiplexed Streams:</strong>
            <p>
              QUIC supports multiple independent data streams over a single connection, solving head-of-line blocking issues seen in TCP. It is ideal for applications like HTTP/3.
            </p>
          </li>
          <li>
            <strong>Encryption:</strong>
            <p>
              All QUIC packets are encrypted using TLS 1.3, protecting data and headers against tampering and eavesdropping from the start of the connection.
            </p>
          </li>
          <li>
            <strong>Congestion Control:</strong>
            <p>
              QUIC's flexible congestion control adapts to network conditions, supporting algorithms like Cubic and BBR for optimal performance.
            </p>
          </li>
          <li>
            <strong>0-RTT Data:</strong>
            <p>
              QUIC allows sending data without a full round-trip handshake for repeat connections, reducing latency but posing a risk of replay attacks.
            </p>
          </li>
          <li>
            <strong>Connection Migration:</strong>
            <p>
              QUIC supports connection migration, maintaining session continuity even when switching networks (e.g., Wi-Fi to mobile) using unique Connection IDs.
            </p>
          </li>
          <li>
            <strong>Packet Numbering and Loss Recovery:</strong>
            <p>
              QUIC uses packet numbers instead of sequence numbers, improving loss detection and retransmission in lossy networks.
            </p>
          </li>
          <li>
            <strong>Stateless Reset:</strong>
            <p>
              QUIC includes a stateless reset mechanism, allowing safe and immediate termination of connections when needed.
            </p>
          </li>
        </ul>
        <h3 className="sub-section-title" style={{ paddingTop: '2rem' }}>Properties of QUIC Protocol</h3>
        <ul className="quic-properties">
          <li>
            <strong>Faster Connection Establishment:</strong>
            <p>
              QUIC minimizes connection establishment latency by integrating the TLS handshake with the transport layer handshake, reducing the time taken for a secure connection compared to TCP+TLS.
            </p>
          </li>
          <li>
            <strong>Multiplexing Streams:</strong>
            <p>
              QUIC allows multiple streams to be multiplexed onto a single connection. Sending data over one stream does not affect another, avoiding the head-of-line (HoL) blocking issues present in TCP.
            </p>
          </li>
          <li>
            <strong>Avoids Head-of-Line Blocking:</strong>
            <p>
              Packet loss in one stream does not delay packets in other streams. This enhances the performance of data transfers, especially in unreliable networks.
            </p>
          </li>
          <li>
            <strong>Connection Migration:</strong>
            <p>
              QUIC allows connections to survive client IP address changes, such as switching from Wi-Fi to cellular data. The connection ID helps maintain the session without needing to re-establish the connection.
            </p>
          </li>
          <li>
            <strong>Better Security Integration:</strong>
            <p>
              QUIC embeds TLS 1.3 encryption directly into the protocol, speeding up secure communications by avoiding additional encryption handshakes.
            </p>
          </li>
          <li>
            <strong>Optimized for HTTP/3:</strong>
            <p>
              QUIC is designed for use as the transport layer for HTTP/3, making it ideal for handling the multiplexing needs of modern web traffic, such as images, scripts, and stylesheets.
            </p>
          </li>
        </ul>
        <h1 className="main-title">Architecture of QUIC Protocol</h1>
        <p>
          The QUIC protocol operates using the UDP socket to provide a secure and reliable channel
          for application-layer protocols like HTTP/3. Unlike traditional transport-layer protocols
          that use identifiers like ports, QUIC utilizes a globally unique Connection ID, enabling
          seamless migration across networks, such as from Wi-Fi to cellular, with no disruption
          of service. This makes QUIC well-suited for dynamic networks.
          Key features include multiplexing streams, reduced latency with 0-RTT handshakes, and strong
          security through the integration of TLS 1.3.
        </p>
        <h2 className="sub-section-title">A. Multiplexing</h2>
        <p>
          Unlike TCP, QUIC supports carrying multiple independent streams over a single connection,
          eliminating head-of-line blocking and improving performance for web applications.
        </p>
        <h2 className="sub-section-title">B. Reduced Handshake Latency</h2>
        <p>
          QUIC reduces connection establishment time by optimizing the handshake process. It supports
          both 1-RTT and 0-RTT handshakes. The 1-RTT handshake allows for connection after key negotiation,
          while the 0-RTT handshake enables data transmission from a cached session without waiting for
          handshake completion.
        </p>
        <h2 className="sub-section-title">C. Connection Migration</h2>
        <p>
          QUIC allows connections to migrate across different networks without needing session reestablishment,
          ensuring better performance and reliability for mobile users.
        </p>
        <h2 className="sub-section-title">D. Improved Security</h2>
        <p>
          QUIC integrates TLS 1.3 encryption within its architecture, providing end-to-end encryption starting
          from the very first handshake packet. This protects against eavesdropping and data tampering.
        </p>
        <h2 className="sub-section-title">E. Packet Structure</h2>
        <p>
          A QUIC packet is composed of two parts: the Header (for routing and connection information) and
          the Payload (the actual data). Long headers are used in the initial exchanges, while short headers
          are used for most subsequent data transfers.
        </p>
        <h1 className="main-title">Performance Analysis of QUIC</h1>
        <p>
          Despite its use in services like YouTube, Gmail, and Google Translate, QUIC hasn't seen widespread
          public deployment. Performance studies focus on factors such as Page Load Time (PLT) under various
          network conditions, including delay, packet loss, and object sizes.
          Some studies involved simulations on custom servers, while others tested connectivity to services
          like Google, Facebook, and Cloudflare.
        </p>
        <h2 className="sub-section-title">A. Representative Data and Results</h2>
        <p>
          Performance comparisons between HTTP/3 (using Proxygen, ngtcp2, and gQUIC) and HTTP/2 were conducted
          using tools like Chrome and cURL for single-object and multi-object page loading tests. The metrics
          included acknowledged data over time and Speed Index.
        </p>
        <h2 className="sub-section-title">B. Key Findings</h2>
        <ol className="findings-list">
          <li>
            <strong>Page Load Time (PLT) Tests:</strong> QUIC generally performs better under favorable conditions
            (small payloads, low latency), as shown by the work of Yu et al. In those conditions, QUIC outperforms
            HTTP/2.
          </li>
          <li>
            <strong>Packet Loss:</strong> QUIC performed better than HTTP/2 with small packet loss (0.1% - 1%)
            in services like Google and Facebook, showing up to a 20% speed gain. However, for payloads larger
            than 1MB, the performance improvement became negligible.
          </li>
          <li>
            <strong>Congestion Control Impact:</strong> QUIC performance suffered at Cloudflare endpoints due to
            the CUBIC congestion control algorithm. In scenarios with higher payload sizes and 1% packet loss,
            HTTP/2 outperformed QUIC.
          </li>
          <li>
            <strong>Delays:</strong> QUIC outperformed HTTP/2 at Google endpoints when artificial delays of
            50ms and 100ms were applied, with up to 27% better performance for small payloads. However, at
            Facebook and Cloudflare endpoints, QUIC underperformed, with losses up to 33% in some cases.
          </li>
          <li>
            <strong>QUIC Implementation Differences:</strong> Different QUIC implementations (gQUIC, aioquic,
            lsquic, and ngtcp2) were tested, revealing performance differences based on the specific version
            and deployment. This underlines the importance of continued optimization.
          </li>
        </ol>
      </div>
    </>
  );
}
export default Content;