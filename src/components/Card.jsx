const Card = ({ children }) => {
    return (
        <div 
            className="card"
            style={{ 
                display: 'grid',
                justifyContent: 'center',
                justifyItems: 'center',
                width: '300px',
                paddingBlock: '1rem',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff'
            }}>
            {children}
        </div>
    );
};

export default Card