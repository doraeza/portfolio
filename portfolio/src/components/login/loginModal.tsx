import { useEffect, useRef } from "react";

const ModalBasic = ({ setModalOpen, inputId, inputPwd, loginToggle}: {setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,inputId:any, inputPwd:any, login:any, loginToggle:any}) =>{
    const closeModal = () => {
    setModalOpen(false);
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event: MouseEvent) => {
        // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
        if(modalRef.current &&
            !modalRef.current.contains(event !== null && event.target instanceof Node ? event.target : null))
            {setModalOpen(false)}
        };

        // 이벤트 핸들러 등록
        document.addEventListener("mousedown", handler);

        return () => {
        // 이벤트 핸들러 해제
        document.removeEventListener("mousedown", handler);
        };
    }, [modalRef, setModalOpen]);

return (
    // 모달창을 useRef로 잡아준다.
    <div className='modalframe'>
        <div ref={modalRef} className='modalcontainer'>
            <button className='closemodal' onClick={closeModal}>
                X
            </button>
            <input placeholder={"id"} {...inputId.props} />
            <input placeholder={"pwd"} {...inputPwd.props} />
            <button onClick={loginToggle}>login</button>
        </div>
    </div>
);
}
export default ModalBasic;