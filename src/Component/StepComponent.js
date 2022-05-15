import React, {useState} from 'react';
import { Steps, Typography } from 'antd';
const { Title } = Typography
const { Step } = Steps;
const StepComponent = () => {
    const [state, setState] = useState(0);

    const onChange = () =>{
        setState({ state });
    }
    return (
        <Steps progressDot  onChange={onChange} size="small">
            <Step title={<Title style={{ fontSize:"10px" }}>Cài đặt thông tin cửa hàng</Title>} />
            <Step title={<Title style={{ fontSize:"10px" }}>Cài đặt vận chuyển</Title>} />
            <Step title={<Title style={{ fontSize:"10px" }}>Đăng bán sản phẩm</Title>} />
        </Steps>
    );
}

export default StepComponent;
