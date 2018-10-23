import React, { Component } from 'react';

import './MasterStyles15.css';
import './adoption.css';
import './signup16.css';
import './20.css';
export default class extends Component {

render() {
    return (
    <div>
        <div className="resp-header-container">
            <div className="resp-header-box ms-bgc-tp" style={{backgroundColor:'#da3b01'}} aria-live="assertive" id="TitleBox">
                <h2 className="resp-header-box-text ms-fcl-w" id="MultiPageTitle" aria-live="assertive" role="heading">Bản dùng thử Proptech Plus Business Premium</h2>
            </div>
        </div>
        <div className="resp-content-box" role="region" aria-live="polite" aria-atomic="false">
            <div className="resp-content-contrastbg">
                <div className="mpl-title-box gemini" id="PageTitleBox" aria-live="assertive" aria-atomic="false">
                    <div className="mpl-banner-box ms-bgc-b mpl-banner-box-hidden gemini">
                        <h2 className="mpl-banner-box-text ms-fcl-w gemini"></h2>
                    </div>
                    <h1 className="mpl-title-box-text ms-fcl-nd gemini" id="WizardPageTitle" role="heading">Chào mừng bạn, hãy cùng tìm hiểu về bạn</h1>
                </div>
                <div id="signup_form_container">
                    <div className="signin-bubble  ">
                        <div className="left-side" data-maxfontsize="17" style={{maxWidth:'570px'}}>
                            <div className="tip-container">
                                <div className="tip"></div>
                            </div>
                            Bạn muốn thêm nội dung này vào đăng ký hiện có của mình?
                            {/* <a id="TopRightLink"   className="ms-fcl-tp HyperLink"  href="">Đăng nhập</a> */}
                        </div>
                        <div className="right-side" id="divTopRightLink">
                            <span id="TopRightLink_before"></span>
                            <a id="TopRightLink" className="ms-fcl-tp HyperLink"  href="">Đăng nhập</a>
                            <span id="TopRightLink_after"></span>
                        </div>
                    </div>
                    <form action="" method="POST">
                        <div id="_SignupWizardContents">
                            <div className="MultiPageLayoutPanel gemini" 
                                id="SignupMultiPageWizard" boxtype="MultiPageLayoutPanel" 
                                data-step-index="0" data-next-click="$('form').submit();" data-next-text="Tiếp theo"  
                                data-form-id="SignupMultiPageWizard" data-dont-show-progress-on-optional-click="True" 
                                data-title-text="Chào mừng bạn, hãy cùng tìm hiểu về bạn" style={{display:'block'}}>
                                <div>
                                    <div id="wizardstep" aria-live="polite" aria-atomic="false" style={{outline:'none'}}>
                                        <div className="field blackCallouts" aria-live="polite">
                                            <select aria-atomic="False" aria-label="Quốc gia hoặc vùng lãnh thổ"
                                                className="field-halfwidth RegionDropdownList valid" data-val="true" 
                                                data-val-required="Thông tin này bắt buộc." id="StepsData_SelectedRegion" 
                                                name="StepsData.SelectedRegion">
                                                <option value="">Quốc gia hoặc vùng lãnh thổ *</option>
                                                <option value="SA">Ả rập Xê Út</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="EG">Ai Cập</option>
                                                <option value="AL">Albani</option>
                                            </select>
                                            <select aria-atomic="False" aria-label="Tỉnh/ Thành phố"
                                                className="field-halfwidth RegionDropdownList valid" data-val="true" 
                                                data-val-required="Thông tin này bắt buộc." id="StepsData_SelectedRegion" 
                                                name="StepsData.SelectedRegion">
                                                <option value="">Tỉnh/ Thành phố *</option>
                                                <option value="SA">Ả rập Xê Út</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="EG">Ai Cập</option>
                                                <option value="AL">Albani</option>
                                            </select>

                                            <select aria-atomic="False" aria-label="Trạng thái" aria-required="true" 
                                                className="StateDropdownList" data-val="true" data-val-required="Bắt buộc cung cấp tiểu bang." 
                                                id="SchoolState" name="StepsData.SelectedState" style={{display:'none'}}>
                                            </select>
                                            <div className="helpwithvalidator">
                                                <div className="ValidationCalloutForeground" id="SelectedRegionCallout">
                                                    <span className="field-validation-valid" data-valmsg-for="StepsData.SelectedRegion" 
                                                        data-valmsg-replace="true"></span>
                                                    <span className="field-validation-valid" data-valmsg-for="StepsData.SelectedState" 
                                                        data-valmsg-replace="true"></span>
                                                </div>
                                                <div id="_Help" className="help-container">
                                                    <div id="Title__Help" className="help-text" role="link" 
                                                        aria-label="Không thể thay đổi điều này sau khi đăng ký. Tại sao lại không?" tabindex="0">
                                                        <span className="help ms-fcl-tp ms-fcl-ts-h">Không thể thay đổi điều này sau khi đăng ký. Tại sao lại không?</span>
                                                            <div tabindex="0" className="ErrorMessage topBeak ms-fcl-tp ms-bcl-tp " id="Info_Title__Help" 
                                                                aria-label="Chúng tôi sử dụng thông tin khu vực để cung cấp dịch vụ phù hợp. Không thể thay đổi được điều này vì các dịch vụ có thể khác nhau theo khu vực." 
                                                                style={{display: "none"}}>
                                                                Chúng tôi sử dụng thông tin khu vực để cung cấp dịch vụ phù hợp. Không thể thay đổi được điều này vì các dịch vụ có thể khác nhau theo khu vực.   
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                        </div>
                                            <div>
                                                <div className="field name-field">
                                                    <fieldset className="floatleft">
                                                        <input aria-atomic="false" aria-label="Họ"
                                                             className="last-name text" data-val="true" 
                                                             data-val-required="Thông tin này bắt buộc." id="LastName" 
                                                             maxlength="50" name="StepsData.LastName" placeholder="Họ *" type="text" value=""/>
                                                        <div className="field-validation-area ValidationCalloutForeground" 
                                                            role="alert" id="LastNameCallout">
                                                            <span className="field-validation-valid" data-valmsg-for="StepsData.LastName" 
                                                                data-valmsg-replace="true">
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="floatleft">
                                                        <div className="spaceforname">&nbsp;</div>
                                                    </fieldset>
                                                    <fieldset >
                                                        <input aria-label="Tên" className="first-name text" data-val="true" 
                                                            data-val-required="Thông tin này bắt buộc." id="FirstName" 
                                                            maxlength="50" name="" placeholder="Tên *" type="text" value=""/>
                                                        <div className="field-validation-area ValidationCalloutForeground" 
                                                            role="alert" id="FirstNameCallout">
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <fieldset className="field">
                                                    <input aria-label="Tên công ty" 
                                                        className="large text" data-val="true" 
                                                        data-val-regex="Vui lòng nhập Tên hợp lệ" 
                                                        data-val-regex-pattern="^(?!^[.])([-'a-zA-Z0-9_]+\.)*[-'a-zA-Z0-9_]+@(?!\.+)([-a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$" 
                                                        data-val-required="Thông tin này bắt buộc." 
                                                        id="StepsData_EmailAddress" name="StepsData.EmailAddress" 
                                                        placeholder="Tên công ty *" type="text" value=""/>
                                                    <div className="field-validation-area ValidationCalloutForeground" 
                                                        role="alert" id="EmailAddressCallout">
                                                        <span className="field-validation-valid" data-valmsg-for="StepsData.EmailAddress"
                                                        data-valmsg-replace="true"></span>
                                                    </div>
                                                </fieldset>
                                                <div className="field name-field">
                                                    <fieldset className="floatleft" >
                                                        <select className="field-halfwidth  floatleft" data-val="true" data-val-requiredif="Thông tin này bắt buộc." data-val-requiredif-dependentproperty="StepsData_IsInputRequired" data-val-requiredif-desiredvalue="true" id="StepsData_OrgSize" input-required="True" name="StepsData.OrgSize">
                                                            <option value="">Kích thước tổ chức của bạn *</option>
                                                            <option value="1">1 người</option>
                                                            <option value="2-4">2-4 người</option>
                                                            <option value="5-9">5-9 người</option>
                                                            <option value="10-24">10-24 người</option>
                                                            <option value="25-49">25-49 người</option>
                                                            <option value="50-249">50-249 người</option>
                                                            <option value="250-999">250-999 người</option>
                                                            <option value="1000+">1000+ người</option>
                                                        </select>
                                                    </fieldset>
                                                    <fieldset className="floatleft">
                                                        <div className="spaceforname">&nbsp;</div>
                                                    </fieldset>
                                                    <fieldset className="floatleft">
                                                        <input aria-atomic="false" aria-label="Họ"
                                                             className="last-name text" data-val="true" 
                                                             data-val-required="Thông tin này bắt buộc." id="LastName" 
                                                             maxlength="50" name="StepsData.LastName" 
                                                             placeholder="Mã số thuế *" type="text" value=""/>
                                                        <div className="field-validation-area ValidationCalloutForeground" 
                                                            role="alert" id="LastNameCallout">
                                                            <span className="field-validation-valid" data-valmsg-for="StepsData.LastName" 
                                                                data-valmsg-replace="true">
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            
                                            <fieldset className="field">
                                                <input aria-label="Địa chỉ văn phòng công ty" 
                                                    className="large text" data-val="true" 
                                                    data-val-regex="Vui lòng nhập địa chỉ văn phòng hợp lệ" 
                                                    data-val-regex-pattern="^(?!^[.])([-'a-zA-Z0-9_]+\.)*[-'a-zA-Z0-9_]+@(?!\.+)([-a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$" 
                                                    data-val-required="Thông tin này bắt buộc." 
                                                    id="StepsData_EmailAddress" name="StepsData.EmailAddress" 
                                                    placeholder="Địa chỉ văn phòng công ty*" type="text" value=""/>
                                                <div className="field-validation-area ValidationCalloutForeground" 
                                                    role="alert" id="EmailAddressCallout">
                                                    <span className="field-validation-valid" data-valmsg-for="StepsData.EmailAddress"
                                                     data-valmsg-replace="true"></span>
                                                </div>
                                            </fieldset>
                                            <fieldset className="field">
                                                <input aria-label="Địa chỉ email công ty" 
                                                    className="large text" data-val="true" 
                                                    data-val-regex="Vui lòng nhập địa chỉ email hợp lệ" 
                                                    data-val-regex-pattern="^(?!^[.])([-'a-zA-Z0-9_]+\.)*[-'a-zA-Z0-9_]+@(?!\.+)([-a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$" 
                                                    data-val-required="Thông tin này bắt buộc." 
                                                    id="StepsData_EmailAddress" name="StepsData.EmailAddress" 
                                                    placeholder="Địa chỉ email công ty*" type="text" value=""/>
                                                <div className="field-validation-area ValidationCalloutForeground" 
                                                    role="alert" id="EmailAddressCallout">
                                                    <span className="field-validation-valid" data-valmsg-for="StepsData.EmailAddress"
                                                     data-valmsg-replace="true"></span>
                                                </div>
                                            </fieldset>
                                            <fieldset className="field">
                                                <input id="PhoneNumber" aria-label="Số điện thoại công ty" 
                                                    className="large text" data-val="true" data-val-requiredif="Thông tin này bắt buộc." 
                                                    data-val-requiredif-dependentproperty="StepsData_IsInputRequired" 
                                                    data-val-requiredif-desiredvalue="true" input-required="True" 
                                                    name="StepsData.PhoneNumber" placeholder="Số điện thoại công ty*" type="text" value=""/>
                                                <div className="field-validation-area ValidationCalloutForeground" 
                                                    role="alert" id="PhoneNumberCallout"><span className="field-validation-valid" 
                                                    data-valmsg-for="StepsData.PhoneNumber" data-valmsg-replace="true"></span>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</div>
        );
    }
}