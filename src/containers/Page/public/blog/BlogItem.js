import React from 'react';
import BlogItemWrapper from './BlogItem.style';
import ResponsiveIMG from 'components/responsiveIMG/ResponsiveIMG';
import { Row, Col, Button, Icon } from 'antd';
export default class extends React.Component {
    state = {
        viewMod: this.props.viewMode
    }
    render() {
        return this.state.viewMod !== 'full' ? (
            <BlogItemWrapper>
                <Row type="flex" justify="flex-between" align="top" gutter={30}>
                    <Col md={10}>
                        <ResponsiveIMG ratioWidth={4} ratioHeight={3} imgUrl={`https://contrastly.com/affiliates/media/banners/portrait-750x500-1.jpg`} />
                    </Col>
                    <Col md={14}>
                        <div className='blog-title'>
                            <h2>
                                Where does it come from?
                        </h2>
                        </div>
                        <div className='blog-meta'>
                            <p>
                                by <strong>Author Name</strong>
                            </p>
                        </div>
                        <div className='blog-des'>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...
                            </p>
                        </div>
                        <Button>Xem thêm <Icon type="double-right" theme="outlined" /></Button>
                    </Col>
                </Row>
            </BlogItemWrapper>
        ) : (
                <BlogItemWrapper className="view-mode__full">
                    <Row type="flex" justify="flex-between" align="top" gutter={30}>
                        <Col md={24}>
                            <div className='blog-title'>
                                <h2>
                                    Where does it come from?
                                </h2>
                            </div>
                            <div className='blog-meta'>
                                <p>
                                    by <strong>Author Name</strong>
                                </p>
                            </div>
                            <div className='blog-content'>
                                <h4>&quot;Cha đẻ&quot; của đồng ether Vitalik Buterin n&oacute;i với Bloomberg rằng ng&agrave;nh c&ocirc;ng nghiệp blockchain đang tiến tới ngưỡng giới hạn v&agrave; kh&ocirc;ng c&ograve;n cơ hội để chứng kiến mức tăng trưởng 1.000% nữa.</h4>

                                <div class="relationnews" id="ContentPlaceHolder1_ContentPlaceHolder1_ctl00_ctrDetail_divtinlienquan">
                                    <div id="TinLienQuanDetail">
                                        <ul>
                                        </ul>
                                    </div>
                                </div>

                                <p><img alt="640 tỷ USD đ&amp;#227; bốc hơi khỏi thị trường tiền số trong 9 th&amp;#225;ng qua" class="img" src="https://cafebiz.cafebizcdn.vn/thumb_w/600/2018/9/10/photo1536553090282-153655309028226595556.jpg" /></p>

                                <div class="avatar-desc">&nbsp;</div>

                                <div>&nbsp;</div>

                                <div class="detail-content">
                                    <p>Sau nhiều th&aacute;ng ảm đạm, thị trường tiền số tiếp tục ở trong t&igrave;nh cảnh rất kh&oacute; khăn v&agrave; vừa đ&acirc;m thủng đ&aacute;y 10 th&aacute;ng, lần n&agrave;y dẫn đầu đ&agrave; giảm l&agrave; đối thủ lớn nhất của bitcoin .</p>

                                    <p>Theo số liệu Bloomberg tổng hợp, đồng ether đ&atilde; giảm gi&aacute; tới 8,1% trong phi&ecirc;n giao dịch cuối tuần trước. Bitcoin cũng giảm 2% trong khi gi&aacute; trị vốn h&oacute;a của thị trường tiền số theo thống k&ecirc; của Coinmarketcap.com sụt giảm 196 tỷ USD, giảm tổng cộng 640 tỷ USD so với mức đỉnh hồi th&aacute;ng 1.</p>

                                    <p>Chỉ số Bloomberg Galaxy Crypto Index gồm c&aacute;c đồng tiền số lớn nhất thế giới đ&atilde; li&ecirc;n tục sụt giảm trong 5 tr&ecirc;n 6 tuần vừa qua, giữa những lo ngại rằng sẽ phải mất nhiều thời gian hơn dự t&iacute;nh để c&aacute;c t&agrave;i sản số được sử dụng rộng r&atilde;i hơn. Cuối tuần trước, Ủy ban chứng kho&aacute;n Mỹ đ&atilde; th&ocirc;ng b&aacute;o quyết định tạm ngừng giao dịch 2 sản phẩm chứng kho&aacute;n c&oacute; li&ecirc;n quan đến tiền số.</p>

                                    <p>Đồng thời, &quot;cha đẻ&quot; của đồng ether Vitalik Buterin n&oacute;i với Bloomberg rằng ng&agrave;nh c&ocirc;ng nghiệp blockchain đang tiến tới ngưỡng giới hạn bởi b&acirc;y giờ một người b&igrave;nh thường cũng đ&atilde; &iacute;t nhất 1 lần nghe đến c&ocirc;ng nghệ n&agrave;y. &quot;Kh&ocirc;ng c&ograve;n cơ hội để chứng kiến mức tăng trưởng 1.000% nữa&quot;, anh n&oacute;i.</p>

                                    <p>Thị trường tiền số vẫn tiếp tục chịu &aacute;p lực lớn trong phi&ecirc;n giao dịch s&aacute;ng nay bất chấp Citigroup cho biết đ&atilde; ph&aacute;t triển 1 cơ chế mới cho hoạt động đầu tư v&agrave;o c&aacute;c t&agrave;i sản số. Ng&acirc;n h&agrave;ng n&agrave;y dự định sẽ trở th&agrave;nh đại l&yacute; ph&aacute;t h&agrave;nh c&aacute;c chứng chỉ lưu k&yacute; t&agrave;i sản số (DAR &ndash; digital asset receipts) để c&aacute;c nh&agrave; đầu tư c&oacute; thể giao dịch c&aacute;c t&agrave;i sản số m&agrave; kh&ocirc;ng cần phải trực tiếp sở hữu ch&uacute;ng.</p>

                                    <p>T&iacute;nh đến 10h s&aacute;ng nay theo giờ Hồng K&ocirc;ng, chỉ số Bloomberg Galaxy Crypto Index tiếp tục giảm 3,5%, hướng tới mức đ&oacute;ng cửa thấp nhất kể từ giữa th&aacute;ng 11.</p>

                                    <p><strong>Theo T&uacute; Anh</strong></p>

                                    <div id="admzone480459">&nbsp;</div>

                                    <p>Tr&iacute; thức trẻ/Bloomberg</p>
                                </div>

                            </div>

                        </Col>
                    </Row>
                </BlogItemWrapper>
            );
    }
}