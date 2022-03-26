import './ChartText.css'

export const ChartText = () => {
    return ( 
        <main className='principal_chart'>
            <div className='main_box'>
                <input className='text_box' type = 'text' name = 'textbox' placeholder= 'Escribe un mensaje...'/>
                <input className='btn_box' type='button' name='btn' value='Enviar'/>
                <img  className='btn_box-icon' src="https://i.ibb.co/71gDMWb/icons8-send-64-1-1.png" />
            </div>
        </main> 
        
    );
};
 


