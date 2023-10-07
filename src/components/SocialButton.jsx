
const SocialButton = ({primerIcono, segundoIcono, tercerIcono}) => {
    return (
        <>
        <div className="TitleBox">
            
            <div className="mediaButtonBox p-2">
                <i className={`fa-brands ${primerIcono} fa-2xl p-2`}></i>
                <i className= {`fa-brands ${segundoIcono} fa-2xl p-2`}></i>
                <i className= {`fa-brands ${tercerIcono} fa-2xl p-2`}></i>
            </div> 
        </div>
        </>
    );
};

export default SocialButton;