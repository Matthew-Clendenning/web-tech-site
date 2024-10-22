import '../styles/App.css';

function Home() {
  return (
    <>
      <div className="overview-container">
        <div>
          <h2 className='section-title'>Key Challenges</h2>
          <h3>Firewall Compatibility</h3>
          <p>
            Most firewalls do not recognize
            QUIC traffic as web traffic, i.e., HTTP/HTTPS, which prevents them from applying the usual 
            packet inspection, malwares canning, and web filtering. Incompatibility with firewalls raises 
            some security concerns because malicious traffic could pass around standard security checks and 
            pop into critical networks without proper screening.
          </p>
          <h3>State Exhaustion QUIC</h3>
          <p>
            It is vulnerable to State Exhaustion Attacks, whereby an attacker starts a large number of incomplete 
            connections that will very quickly overwhelm the server's state memory and disrupt service. For every 
            open connection, the server keeps resources, which makes it susceptible to resource exhaustion on the part 
            of malicious actors.
          </p>
          <h3>Reflective Amplification</h3>
          <p>
            Since in the QUIC handshake, the server responds with a bigger packet size compared to the initial 
            request, hackers could use this for reflective amplification attacks. Because of the inherent reflection 
            amplification by the protocol itself, in the case of unverified requests
          </p>
          <h3>Network Infrastructure Compatibility</h3>
          <p>
            Since QUIC runs on top of UDP, many network infrastructures may struggle with the handling of QUIC flows 
            because they are optimized for TCP. Compatibility issues arise with the previously deployed network infrastructure. 
            equipment, which ends up in inconsistent performances or failure to handle QUIC traffic as required.
          </p>
          <h3>Optimistic ACK</h3>
          <p>
            Optimistic ACKs allow malicious clients to force servers to send more data than the network can support by 
            acknowledging packets that never have been received. This saturates the network, at the cost of overall service performance.
          </p>
        </div>
        <div>
          <h2 className='section-title'>Recent Trends and Advancements</h2>
          <p>Besides, various QUIC implementations in different programming languages require thorough security reviews. It is expected that further research 
            will be conducted on the defenses against spoofing, UDP amplification attacks, and other threats, given that many of the implementations are quite 
            new and might have unknown vulnerabilities. Research targeting the security of specific QUIC applications, such as HTTP/3 and DNS over QUIC, is 
            also lagging and in need of targeted analysis. The development of such test tools would be stateful QUIC fuzzers and packet crafting utilities to 
            test various deployments of QUIC, with the intent of uncovering different QUIC implementations' misconfigurations and vulnerabilities, so that QUIC 
            can be securely and effectively deployed in a wide variety of network environments.
          </p>
        </div>
        <div>
          <h2 className='section-title'>Future Research Directions</h2>
          <p>
            Future research on QUIC security shall focus on the challenges created by its features and implications for traffic analysis. 
            Since QUIC traffic is fully encrypted, it cannot be efficiently managed by network operators. Therefore, it will require next-generation 
            firewalls that can carry out deep packet inspection. There are also questions about the behavior of this protocol concerning packet ordering: 
            QUIC does not guarantee order across streams. This could expose weaknesses that an attacker may want to leverage. The vulnerability to replay 
            attacks during the 0-RTT phase entails serious security risks and, recently, several studies have been fired up with the purpose of enhancing 
            resistance of the protocol without compromising the low-latency feature.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;