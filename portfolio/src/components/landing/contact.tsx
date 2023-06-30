import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ContactForm } from '../../interface/Contact';



const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs.send(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, formData,  import.meta.env.VITE_APP_PUBLIC_KEY)
      .then((response) => {
        console.log('메일이 성공적으로 보내졌습니다.', response);
      })
      .catch((error) => {
        console.error('메일 전송 중 오류가 발생했습니다.', error);
      });

    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{background: "#191919", border:"solid 1px #9bd65cd6", padding: "5px", width: "350px", marginBottom: "16px", marginTop: "16px"}}>
        <form onSubmit={handleSubmit}>
            <div>
                <label style={{color: "#9bd65c", textShadow: "0 0 10px #9bd65c"}} htmlFor="name">이름:</label>
                <input style={{background: "#191919", border:"solid 1px #9bd65cd6", color: "#9bd65c", textShadow: "0 0 10px #9bd65c"}}
                type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>

            <div style={{marginTop: "15px"}}>
                <label style={{color: "#9bd65c", textShadow: "0 0 10px #9bd65c"}} htmlFor="email">이메일:</label>
                <input style={{background: "#191919", border:"solid 1px #9bd65cd6", color: "#9bd65c", textShadow: "0 0 10px #9bd65c"}}
                type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>

            <div style={{marginTop: "15px"}}>
                <label style={{color: "#9bd65c", textShadow: "0 0 10px #9bd65c"}} htmlFor="message">메시지:</label>
                <textarea style={{background: "#191919", border:"solid 1px #9bd65cd6", color: "#9bd65c", textShadow: "0 0 10px #9bd65c"}}
                id="message" name="message" value={formData.message} onChange={handleInputChange} />
            </div>
            <button style={{marginTop: "15px",background: "#191919", cursor: "pointer", borderRadius: "9px", border:"solid 1px #9bd65cd6", color: "#9bd65c", textShadow: "0 0 10px #9bd65c"}} type="submit">전송</button>

        </form>
    </div>
  );
};

export default Contact;
