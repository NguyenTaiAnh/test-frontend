import React from 'react';
import StepComponent from './StepComponent';
import { Col,Row, Card } from 'antd';
import { ReactComponent as Back} from '../assets/icons/back.svg';
import { PlusCircleFilled } from '@ant-design/icons';
const ContentComponent = () => {
    return (
        <Row className="container">
            <Col span={4}>
                <Back />
            </Col>
            <Col span={20}>

            <StepComponent/>
            <Row style={{ textAlign: 'center', marginTop:"2%" }}>
                <Col className="gutter-row" span={6}>
                    <button className="btn-click">Nhà phân phối</button>
                </Col>
                <Col className="gutter-row" span={6}>
                    <button className="btn-not-active">Nhà sản xuất QT</button>
                </Col>
                <Col className="gutter-row" span={6}>
                    <button className="btn-not-active">Nhà sản xuất VN</button>
                </Col>
                <Col className="gutter-row" span={6}>
                    <button className="btn-not-active">Nhà nhập khẩu/ Đại lý</button>
                </Col>
            </Row>
            <Card style={{ margin:"5%", borderRadius:"10px" }}>
                <p className="title">Thông tin Nhà phân phối chính hãng ( Bắt buộc )</p>
                <div>
                    <p className="field-name">Quốc gia sản xuất</p>
                    <input type="text" className="field-input" placeholder="Nhập Quốc gia sản xuất"/>
                </div>
                <div style={{ marginTop:'10px'}}>
                    <p className="field-name">Tên công ty Nhà sản xuất</p>
                    <div>
                        <select className="field-input" style={{ color:'#808080' }}>
                            <option disabled selected>Nhập tên Nhà sản xuất</option>
                            <option value="jack">Jack</option>
                            <option value="lucy">Lucy</option>
                            <option value="tom">Tom</option>
                        </select>
                        {/* <DownOutlined /> */}
                    </div>
                </div>
                <div style={{ marginTop:'10px'}}>
                    <p className="field-name">Tên công ty Nhà phân phối</p>
                    <div>
                        <select className="field-input" style={{ color:'#808080' }}>
                            <option disabled selected>Nhập tên Nhà phân phối</option>
                            <option value="jack">Jack</option>
                            <option value="lucy">Lucy</option>
                            <option value="tom">Tom</option>
                        </select>
                        {/* <DownOutlined /> */}
                    </div>                
                </div>
                <div style={{ marginTop:'10px'}}>
                    <p className="field-name">Địa chỉ kho hàng giao đi</p>
                    <input type="text" className="field-input" placeholder="Nhập địa chỉ kho hàng giao đi"/>
                </div>
                <Row className="">
                    <Col span={12}>
                        <div style={{ marginTop:'5%'}}>
                            <p className="field-name">Địa chỉ kho hàng giao đi</p>
                            <input type="text" style={{width:'90%'}} className="field-input" placeholder="Nhập địa chỉ kho hàng giao đi"/>
                        </div>
                        <div style={{ margin:'5% 0'}}>
                            <p className="field-name">Địa chỉ kho hàng giao đi</p>
                            <input type="text" style={{width:'90%'}} className="field-input" placeholder="Nhập địa chỉ kho hàng giao đi"/>
                        </div>
                        
                    </Col>
                    <Col span={12}>
                        <div style={{ width:'100%', height:'100%' }}>
                            <p className="field-name" style={{ justifyContent: 'center', marginTop:'5%' }}>Ảnh đăng ký kinh doanh</p>
                            <div className="import-file">
                                <input type="file" className="input-file"/>
                                <PlusCircleFilled className="icon-import-file" />
                                <label for="file" className="title-file">Tải lên</label>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <div style={{ marginTop:'2%'}}>
                            <p className="field-name">CO / CQ</p>
                            <input type="text" style={{width:'90%'}} className="field-input" placeholder="Nhập CO / CQ"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                       <a className="continue">
                            <p style={{ color:'white', margin:'0' }}>Tiếp theo</p>
                       </a>
                    </Col>
                </Row>
                
            </Card>
            </Col>

        </Row>
    );
}

export default ContentComponent;
