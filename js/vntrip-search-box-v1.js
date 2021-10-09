(function () {
    const formatDate = 'DD/MM/YYYY'
    const formatDate1 = 'YYYYMMDD'
    let domestics = [
        {
            "regionnamelong": "Da Lat City, Lam Dong, Vietnam",
            "regionname_vi": "Thành phố Đà Lạt",
            "seo_url": "lam-dong/da-lat",
            "regiontype": "vntrip city",
            "regionid": "1003",
            "regionnamelong_vi": "Thành phố Đà Lạt, Lâm Đồng, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Da Lat",
            "display": "Đà Lạt"
        },
        {
            "regionnamelong": "Sa Pa District, Lao Cai, Vietnam",
            "regionname_vi": "Huyện Sa Pa",
            "seo_url": "lao-cai/sapa",
            "regiontype": "vntrip city",
            "regionid": "1032",
            "provider": "vntrip",
            "regionnamelong_vi": "Huyện Sa Pa, Lào Cai, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Sa Pa",
            "display": "Sa pa"
        },
        {
            "regionnamelong": "Nha Trang City, Khanh Hoa, Vietnam",
            "regionname_vi": "Thành phố Nha Trang",
            "seo_url": "khanh-hoa/nha-trang",
            "regiontype": "vntrip city",
            "regionid": "960",
            "regionnamelong_vi": "Thành phố Nha Trang, Khánh Hòa, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Nha Trang",
            "display": "Nha Trang"
        },
        {
            "regionnamelong": "Ho Chi Minh City, Vietnam",
            "regionname_vi": "Thành phố Hồ Chí Minh",
            "seo_url": "sai-gon-ho-chi-minh",
            "regiontype": "vntrip province",
            "regionid": "67",
            "regionnamelong_vi": "Thành phố Hồ Chí Minh, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Ho Chi Minh City",
            "display": "Tp. HCM"
        },
        {
            "regionnamelong": "Hue City, Thua Thien Hue, Vietnam",
            "regionname_vi": "Thành phố Huế",
            "seo_url": "thua-thien-hue/hue",
            "regiontype": "vntrip city",
            "regionid": "1248",
            "regionnamelong_vi": "Thành phố Huế, Thừa Thiên Huế, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Hue",
            "display": "Huế"
        },
        {
            "regionnamelong": "Ha Long City, Quang Ninh, Vietnam",
            "regionname_vi": "Thành phố Hạ Long",
            "seo_url": "quang-ninh/ha-long",
            "regiontype": "vntrip city",
            "regionid": "1148",
            "regionnamelong_vi": "Thành phố Hạ Long, Quảng Ninh, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Ha Long",
            "display": "Hạ Long"
        },
        {
            "regionnamelong": "Ha Noi, Vietnam",
            "regionname_vi": "Hà Nội",
            "seo_url": "ha-noi",
            "regiontype": "vntrip province",
            "regionid": "66",
            "regionnamelong_vi": "Hà Nội, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Ha Noi",
            "display": "Hà Nội"
        },
        {
            "regionnamelong": "Vung Tau City, Ba Ria - Vung Tau, Vietnam",
            "regionname_vi": "Thành phố Vũng Tàu",
            "seo_url": "ba-ria-vung-tau/vung-tau",
            "regiontype": "vntrip city",
            "regionid": "1329",
            "regionnamelong_vi": "Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Vung Tau",
            "display": "Vũng Tàu"
        },
        {
            "regionnamelong": "Phan Thiet City, Binh Thuan, Vietnam",
            "regionname_vi": "Thành phố Phan Thiết",
            "seo_url": "binh-thuan/phan-thiet",
            "regiontype": "vntrip city",
            "regionid": "1408",
            "regionnamelong_vi": "Thành phố Phan Thiết, Bình Thuận, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Phan Thiet",
            "display": "Phan Thiết"
        },
        {
            "regionnamelong": "Da Nang, Vietnam",
            "regionname_vi": "Đà Nẵng",
            "seo_url": "da-nang",
            "regiontype": "vntrip province",
            "regionid": "68",
            "regionnamelong_vi": "Đà Nẵng, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Da Nang",
            "display": "Đà Nẵng"
        },
        {
            "regionnamelong": "Hoi An City, Quang Nam, Vietnam",
            "regionname_vi": "Thành phố Hội An",
            "seo_url": "quang-nam/hoi-an",
            "regiontype": "vntrip city",
            "regionid": "1117",
            "regionnamelong_vi": "Thành phố Hội An, Quảng Nam, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Thanh pho Hoi An",
            "display": "Hội An"
        },
        {
            "regionnamelong": "Phu Quoc District, Kien Giang, Vietnam",
            "regionname_vi": "Huyện Phú Quốc",
            "seo_url": "kien-giang/phu-quoc",
            "regiontype": "vntrip city",
            "regionid": "980",
            "regionnamelong_vi": "Huyện Phú Quốc, Kiên Giang, Việt Nam",
            "countrycode": "VN",
            "countryname": "Vietnam",
            "regionname": "Phu Quoc",
            "display": "Phú Quốc"
        }
    ]
    let domesticsFlight = [
        {
            "code": "HAN",
            "text": "Hà Nội",
            "text_en": "Ha Noi",
            "name": "Sân bay Nội Bài",
            "name_en": "Noi Bai International Airport",
            "type": "DOM",
            "region": "Miền Bắc",
            "key_search": ["HAN", "Hà Nội"]
        },
        {
            "code": "HPH",
            "text": "Hải Phòng",
            "text_en": "Hai Phong",
            "name": "Sân bay Cát Bi",
            "name_en": "Cat Bi International Airport",
            "type": "DOM",
            "region": "Miền Bắc",
            "key_search": ["HPH", "Hải Phòng"]
        },
        {
            "code": "DIN",
            "text": "Điện Biên Phủ",
            "text_en": "Dien Bien Phu",
            "name": "Sân bay Điện Biên Phủ",
            "name_en": "Dien Bien Phu Airport",
            "type": "DOM",
            "region": "Miền Bắc",
            "key_search": ["DIN", "Điện Biên Phủ"]
        },
        {
            "code": "UIH",
            "text": "Quy Nhơn",
            "text_en": "Quy Nhon",
            "name": "Sân bay Phù Cát",
            "name_en": "Phu Cat Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["UIH", "Quy Nhơn"]
        },
        {
            "code": "HUI",
            "text": "Huế",
            "text_en": "Hue",
            "name": "Sân bay Phú Bài",
            "name_en": "Phu Bai International Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["HUI", "Huế"]
        },
        {
            "code": "VII",
            "text": "Vinh",
            "text_en": "Vinh",
            "name": "Sân bay Vinh",
            "name_en": "Vinh International Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["VII", "Vinh"]
        },
        {
            "code": "VCL",
            "text": "Chu Lai",
            "text_en": "Quang Nam",
            "name": "Sân bay Chu Lai",
            "name_en": "Chu Lai Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["VCL", "Chu Lai"]
        },
        {
            "code": "CXR",
            "text": "Nha Trang",
            "text_en": "Nha Trang",
            "name": "Sân bay Cam Ranh",
            "name_en": "Cam Ranh International Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["CXR", "Nha Trang"]
        },
        {
            "code": "THD",
            "text": "Thanh Hóa",
            "text_en": "Thanh Hoa",
            "name": "Sân bay Thọ Xuân",
            "name_en": "Tho Xuan Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["THD", "Thanh Hóa"]
        },
        {
            "code": "VDH",
            "text": "Đồng Hới",
            "text_en": "Dong Hoi",
            "name": "Sân bay Đồng Hới",
            "name_en": "Dong Hoi Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["VDH", "Đồng Hới"]
        },
        {
            "code": "TBB",
            "text": "Tuy Hòa",
            "text_en": "Tuy Hoa",
            "name": "Sân bay Tuy Hòa",
            "name_en": "Tuy Hoa Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["TBB", "Tuy Hòa"]
        },
        {
            "code": "PQC",
            "text": "Phú Quốc",
            "text_en": "Phu Quoc",
            "name": "Sân bay Phú Quốc",
            "name_en": "Phu Quoc International Airport",
            "type": "DOM",
            "region": "Miền Nam",
            "key_search": ["PQC", "Phú Quốc"]
        },
        {
            "code": "VCS",
            "text": "Côn Đảo",
            "text_en": "Con Dao",
            "name": "Sân bay Côn Đảo",
            "name_en": "Con Dao Airport",
            "type": "DOM",
            "region": "Miền Nam",
            "key_search": ["VCS", "Côn Đảo"]
        },
        {
            "code": "DLI",
            "text": "Đà Lạt",
            "text_en": "Da Lat",
            "name": "Sân bay Liên Khương",
            "name_en": "Lien Khuong Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["DLI", "Đà Lạt"]
        },
        {
            "code": "BMV",
            "text": "Buôn Ma Thuật",
            "text_en": "Buon Ma Thuat",
            "name": "Sân bay Buôn Ma Thuật",
            "name_en": "Buon Ma Thuat Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["BMV", "Buôn Ma Thuật"]
        },
        {
            "code": "SGN",
            "text": "Tp. Hồ Chí Minh",
            "text_en": "Ho Chi Minh",
            "name": "Sân bay Tân Sơn Nhất",
            "name_en": "Tan Son Nhat International Airport",
            "type": "DOM",
            "region": "Miền Nam",
            "key_search": ["SGN", "Tp. Hồ Chí Minh"]
        },
        {
            "code": "DAD",
            "text": "Đà Nẵng",
            "text_en": "Da Nang",
            "name": "Sân bay Đà Nẵng",
            "name_en": "Da Nang International Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["DAD", "Đà Nẵng"]
        },
        {
            "code": "CAH",
            "text": "Cà Mau",
            "text_en": "Ca Mau",
            "name": "Sân bay Cà Mau",
            "name_en": "Ca Mau Airport",
            "type": "DOM",
            "region": "Miền Nam",
            "key_search": ["CAH", "Cà Mau"]
        },
        {
            "code": "VCA",
            "text": "Cần Thơ",
            "text_en": "Can Tho",
            "name": "Sân bay  Cần Thơ",
            "name_en": "Can Tho International Airport",
            "type": "DOM",
            "region": "Miền Nam",
            "key_search": ["VCA", "Cần Thơ"]
        },
        {
            "code": "PXU",
            "text": "Pleiku",
            "text_en": "Pleiku",
            "name": "Sân bay Pleiku",
            "name_en": "Pleiku Airport",
            "type": "DOM",
            "region": "Miền Trung",
            "key_search": ["PXU", "Pleiku"]
        },
        {
            "code": "VKG",
            "text": "Rạch Giá",
            "text_en": "Rach Gia",
            "name": "Sân bay Rạch Giá",
            "name_en": "Rach Gia Airport",
            "type": "DOM",
            "region": "Miền Nam",
            "key_search": ["VKG", "Rạch Giá"]
        },
    ]
    let script1 = document.createElement('script'),
        script2 = document.createElement('script'),
        script3 = document.createElement('script'),
        script4 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/jquery/latest/jquery.min.js';
    script2.src = 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js';
    script3.src = 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js';
    script4.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js';
    script1.async = false;
    script2.async = false;
    script3.async = false;
    script4.async = false;

    /// load jquery, datepicker
    document.getElementsByTagName('head')[0].appendChild(script1);
    document.getElementsByTagName('head')[0].appendChild(script2);
    document.getElementsByTagName('head')[0].appendChild(script3);
    document.getElementsByTagName('head')[0].appendChild(script4);

    //format string url
    function formatStringUrl (param){
        //Đổi ký tự có dấu thành không dấu
        param = param.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        param = param.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        param = param.replace(/iíìỉĩị/gi, 'i');
        param = param.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        param = param.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        param = param.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        param = param.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        param = param.replace(/\`|\~|\!|\@|\#|\$|\%|\^|\*|\(|\)|\+|\%20|\,|\.|\|\>|\<|\'|\"|\:|\;|/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        param = param.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        param = param.replace(/\-\-\-\-\-/gi, '-');
        param = param.replace(/\-\-\-\-/gi, '-');
        param = param.replace(/\-\-\-/gi, '-');
        param = param.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        param = '@' + param + '@';
        param = param.replace(/\@\-|\-\@|\@/gi, '');
        return param;
    }

    const checkReady = async function(callback) {
        if (window.jQuery && window.jQuery.fn && window.jQuery.fn.daterangepicker) {
            callback(jQuery)
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 200);
        }
    };

    checkReady(function($) {
        if(jQuery) {
            $(function() {
                $(document).ready(function () {
                    setTimeout(function(){
                        $("head").append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&amp;display=swap" />');
                        $('head').append('<link rel="stylesheet" type="text/css" href="css/vntrip-search-box-v1.css" />');
                    }, 100);
                })
                $(document).ready(function () {
                    setTimeout(function(){

                        // * Render list domestics hotel *
                        let domesticsHtml = ''
                        domestics.forEach((item) => {
                            domesticsHtml += `<li class="listPlace__item">
                                                <button class="btnPlaceHotel" type="button" dataSeoUrl=${item.seo_url} >
                                                      <div class="listPlace__text">
                                                            <p class="p1">${item.regionname_vi}</p>
                                                      </div>
                                                </button>
                                            </li>`
                        })

                        // * Render list flight *
                        let flightHTML = '';
                        let airportHTML = '';
                        domesticsFlight.forEach((flightItem) => {
                            flightHTML += `<li>
                                              <button type="button" class='btnFlight' dataCode=${flightItem.code}>
                                                    ${flightItem.text} (${flightItem.code})
                                              </button>
                                          </li>`
                            airportHTML += `<li class="listPlace__item">
                                            <button type="button" class="btnFlight" dataCode=${flightItem.code}>
                                              <div class="listPlace__text">
                                                ${flightItem.text} (${flightItem.code})
                                              </div>
                                            </button>
                                          </li>`
                        })

                        //get param from script
                        // var queryString = $("script[src*='vntrip-search-box-v1.js']").attr('src').split('?')[1];
                        // let user_session = ''
                        // if(queryString) {
                        //     user_session = $.parseJSON('{"'
                        //         + queryString.replace(/&/g, '","').replace(/=/g, '":"')
                        //         + '"}').user_session;
                        // }

                        //get param from script
                        var this_js_script = $("script[src*='vntrip-search-box-v1.js']");
                        var booking_type = this_js_script.attr('booking_type');
                        var this_js_script2 = $("script[src*='vntrip-search-box-v1.js']");
                        var redirect_to = this_js_script2.attr('redirect_to');
                        var this_js_script3 = $("script[src*='vntrip-search-box-v1.js']");
                        var redirect_type = this_js_script3.attr('redirect_type');

                        //get booking_type
                        if(booking_type === 'hotel'){
                            $("#vntripSearchBox").html(`
                                   <div class="vntSearch">
                                        <div class="container">
                                           <div class="vntSearch__body">
                                                <ul class="vntSearch__tab">
                                                  <li class="active">
                                                    <button type="button" id="btnHotel">
                                                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.18667 1.24714L1.86 0.133809C1.52 0.0804752 1.17333 0.173809 0.913333 0.393809C0.653333 0.620475 0.5 0.947142 0.5 1.28714V15.3338C0.5 15.7005 0.8 16.0005 1.16667 16.0005H3.33333V12.5005C3.33333 11.8538 3.85333 11.3338 4.5 11.3338H6.16667C6.81333 11.3338 7.33333 11.8538 7.33333 12.5005V16.0005H10.1667V2.40048C10.1667 1.82714 9.75333 1.34048 9.18667 1.24714ZM4.16667 9.83381H3.16667C2.89067 9.83381 2.66667 9.60981 2.66667 9.33381C2.66667 9.05781 2.89067 8.83381 3.16667 8.83381H4.16667C4.44267 8.83381 4.66667 9.05781 4.66667 9.33381C4.66667 9.60981 4.44267 9.83381 4.16667 9.83381ZM4.16667 7.83381H3.16667C2.89067 7.83381 2.66667 7.60981 2.66667 7.33381C2.66667 7.05781 2.89067 6.83381 3.16667 6.83381H4.16667C4.44267 6.83381 4.66667 7.05781 4.66667 7.33381C4.66667 7.60981 4.44267 7.83381 4.16667 7.83381ZM4.16667 5.83381H3.16667C2.89067 5.83381 2.66667 5.60981 2.66667 5.33381C2.66667 5.05781 2.89067 4.83381 3.16667 4.83381H4.16667C4.44267 4.83381 4.66667 5.05781 4.66667 5.33381C4.66667 5.60981 4.44267 5.83381 4.16667 5.83381ZM4.16667 3.83381H3.16667C2.89067 3.83381 2.66667 3.60981 2.66667 3.33381C2.66667 3.05781 2.89067 2.83381 3.16667 2.83381H4.16667C4.44267 2.83381 4.66667 3.05781 4.66667 3.33381C4.66667 3.60981 4.44267 3.83381 4.16667 3.83381ZM7.5 9.83381H6.5C6.224 9.83381 6 9.60981 6 9.33381C6 9.05781 6.224 8.83381 6.5 8.83381H7.5C7.776 8.83381 8 9.05781 8 9.33381C8 9.60981 7.776 9.83381 7.5 9.83381ZM7.5 7.83381H6.5C6.224 7.83381 6 7.60981 6 7.33381C6 7.05781 6.224 6.83381 6.5 6.83381H7.5C7.776 6.83381 8 7.05781 8 7.33381C8 7.60981 7.776 7.83381 7.5 7.83381ZM7.5 5.83381H6.5C6.224 5.83381 6 5.60981 6 5.33381C6 5.05781 6.224 4.83381 6.5 4.83381H7.5C7.776 4.83381 8 5.05781 8 5.33381C8 5.60981 7.776 5.83381 7.5 5.83381ZM7.5 3.83381H6.5C6.224 3.83381 6 3.60981 6 3.33381C6 3.05781 6.224 2.83381 6.5 2.83381H7.5C7.776 2.83381 8 3.05781 8 3.33381C8 3.60981 7.776 3.83381 7.5 3.83381Z" fill="#595959"></path>
                                                        <path d="M15.5797 7.22838L10.833 6.23438V16.0004H15.333C15.9763 16.0004 16.4997 15.477 16.4997 14.8337V8.36838C16.4997 7.81771 16.1243 7.34904 15.5797 7.22838ZM13.9997 14.0004H12.9997C12.7237 14.0004 12.4997 13.7764 12.4997 13.5004C12.4997 13.2244 12.7237 13.0004 12.9997 13.0004H13.9997C14.2757 13.0004 14.4997 13.2244 14.4997 13.5004C14.4997 13.7764 14.2757 14.0004 13.9997 14.0004ZM13.9997 12.0004H12.9997C12.7237 12.0004 12.4997 11.7764 12.4997 11.5004C12.4997 11.2244 12.7237 11.0004 12.9997 11.0004H13.9997C14.2757 11.0004 14.4997 11.2244 14.4997 11.5004C14.4997 11.7764 14.2757 12.0004 13.9997 12.0004ZM13.9997 10.0004H12.9997C12.7237 10.0004 12.4997 9.77638 12.4997 9.50038C12.4997 9.22438 12.7237 9.00038 12.9997 9.00038H13.9997C14.2757 9.00038 14.4997 9.22438 14.4997 9.50038C14.4997 9.77638 14.2757 10.0004 13.9997 10.0004Z" fill="#595959"></path>
                                                      </svg>
                                                      <span>Khách sạn</span>
                                                    </button>
                                                  </li>                                                
                                                </ul>
                                                <div class="vntSearch__main">
                                                  <div class="vntSearch__hotel open">
                                                    <form action="" method="get" id="formValidateHotel">
                                                        <div class="vntSearch__flex">
                                                          <div class="placeInput">
                                                            <p>Thành phố, địa điểm hoặc tên khách sạn</p>
                                                            <div class="inputInline">
                                                              <input id="inputHotelDomestics" name="inputHotelDomestics" value="" dataSeoUrl="" type="text" class="form-control" placeholder="Nhập điểm đến, khách sạn" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                            <div class="suggestDefault">
                                                              <div class="suggestDefault__header">
                                                                <div class="suggestDefault__input">
                                                                  <input id="inputHotelDomesticsMobile" dataSeoUrl="" name="inputHotelDomesticsMobile" value="" type="text" class="form-control" placeholder="Nhập điểm đến, khách sạn" autocomplete="off">
                                                                </div>
                                                                <button type="button" class="suggestDefault__close">
                                                                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                    <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                  </svg>
                                                                </button>
                                                              </div>
                                                              <div class="suggestDefault__body">
                                                                <p class="suggestDefault__title">Các điểm đến phổ biến</p>
                                                                <ul class="listPlace">
                                                                        ${domesticsHtml}
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="dateInput">
                                                            <p>Ngày nhận phòng / trả phòng</p>
                                                            <div class="inputInline">
                                                              <input id="datepicker" type="text" name="dates" value="" class="form-control" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.75 1.875H10.125V0.875C10.125 0.80625 10.0688 0.75 10 0.75H9.125C9.05625 0.75 9 0.80625 9 0.875V1.875H5V0.875C5 0.80625 4.94375 0.75 4.875 0.75H4C3.93125 0.75 3.875 0.80625 3.875 0.875V1.875H1.25C0.973437 1.875 0.75 2.09844 0.75 2.375V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V2.375C13.25 2.09844 13.0266 1.875 12.75 1.875ZM12.125 12.125H1.875V6.1875H12.125V12.125ZM1.875 5.125V3H3.875V3.75C3.875 3.81875 3.93125 3.875 4 3.875H4.875C4.94375 3.875 5 3.81875 5 3.75V3H9V3.75C9 3.81875 9.05625 3.875 9.125 3.875H10C10.0688 3.875 10.125 3.81875 10.125 3.75V3H12.125V5.125H1.875Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                          </div>
                                                          <div class="vntSearch__btn">
                                                            <button id="btnSearchHotel" type="submit" name="btnSearchHotel" class="btn btn_orange" target="_blank">Tìm kiếm</button>
                                                          </div>
                                                        </div>
                                                    </form>
                                                  </div>
                                                </div>
                                           </div>
                                        </div>
                                   </div>
                            `)
                        }else if(booking_type === 'flight') {
                            $("#vntripSearchBox").html(`
                                   <div class="vntSearch">
                                        <div class="container">
                                           <div class="vntSearch__body">
                                                <ul class="vntSearch__tab">                                              
                                                  <li class="active">
                                                    <button type="button" id="btnFlight">
                                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.492 5.15934C6.492 5.29734 6.49334 5.41269 6.49534 5.49934L1.19066 9.33066C0.758 9.64334 0.5 10.148 0.5 10.6813L0.5 11C0.5 11.1007 0.545344 11.1953 0.623344 11.2587C0.701344 11.322 0.804 11.3467 0.902 11.326L6.872 10.0693L7.15266 12.876L5.264 14.764C5.202 14.8267 5.16666 14.9113 5.16666 15L5.16666 15.6667C5.16666 15.776 5.22066 15.878 5.31 15.9407C5.4 16.0027 5.51466 16.0173 5.61666 15.9787L7.96 15.1L8.184 15.772C8.22934 15.908 8.35666 16 8.5 16C8.64334 16 8.77066 15.908 8.816 15.772L9.04 15.1L11.3827 15.9787C11.4853 16.0173 11.6 16.0027 11.6893 15.9407C11.7793 15.878 11.8333 15.776 11.8333 15.6667L11.8333 15C11.8333 14.9113 11.798 14.8267 11.736 14.764L9.84731 12.8753L10.128 10.0687L16.098 11.3253C16.196 11.346 16.2986 11.3213 16.3766 11.258C16.4546 11.1953 16.5 11.1007 16.5 11L16.5 10.6813C16.5 10.148 16.242 9.64269 15.8093 9.33069L10.5047 5.49934C10.506 5.41269 10.508 5.29734 10.508 5.15934C10.508 3.23266 10.2473 -4.2607e-07 8.5 -3.49691e-07C6.75266 -2.73312e-07 6.492 3.23266 6.492 5.15934ZM9.49 2.91934C9.49666 2.946 9.5 2.97334 9.5 3C9.5 3.14934 9.39934 3.28534 9.24734 3.32266C9.06869 3.36731 8.888 3.25866 8.84334 3.08C8.84269 3.07866 8.72469 2.66666 8.5 2.66666C8.27531 2.66666 8.15734 3.07866 8.156 3.08266C8.10934 3.26 7.928 3.36731 7.75066 3.322C7.57266 3.27666 7.464 3.096 7.51 2.91934C7.59534 2.578 7.9 2 8.5 2C9.1 2 9.40466 2.578 9.49 2.91934Z" fill="#595959"></path>
                                                        </svg>
                                                        <span>Máy bay</span>
                                                    </button>
                                                  </li>
                                                </ul>
                                                <div class="vntSearch__main">
                                                  <div class="vntSearch__flight open">
                                                    <form action="" method="get" id="formValidateFlight">
                                                        <div class="vntSearch__radio">
                                                          <div class="radio">
                                                            <input checked id="fl1" type="radio" name="flight" value="false">
                                                            <label for="fl1">Một chiều</label>
                                                          </div>
                                                          <div class="radio">
                                                            <input id="fl2" type="radio" name="flight" value="true">
                                                            <label for="fl2">Khứ hồi</label>
                                                          </div>
                                                        </div>
                                                        <div class="vntSearch__flex">
                                                          <div class="placeInput flightOrigin">
                                                            <p>Điểm đi</p>
                                                            <div class="inputInline">
                                                              <input type="text" placeholder="Hà Nội (HAN)" name="origin" id="origin" dataCode="" value="" class="form-control" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                            <div class="suggestDefault">
                                                              <div class="suggestDefault__header">
                                                                <div class="suggestDefault__input">
                                                                  <input type="text" id="originMobile" placeholder="Thành phố, địa điểm, sân bay" dataCode="" value="" class="form-control">
                                                                </div>
                                                                <button type="button" class="suggestDefault__close">
                                                                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                    <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                  </svg>
                                                                </button>
                                                              </div>
                                                              <div class="suggestDefault__body">
                                                                <div class="flightDefault">
                                                                  <div class="flightDefault__body">
                                                                    <ul class="flightDefault__tab">
                                                                    </ul>
                                                                    <div class="flightDefault__content">
                                                                      <ul class="flightDefault__list">
                                                                        ${flightHTML}
                                                                      </ul>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <ul class="listPlace hidden" id='airport'>
                                                                  ${airportHTML}
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="vntSearch__toggle">
                                                            <button type="button" class="flightToggle">
                                                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM6.84194 3.55806C7.08602 3.80214 7.08602 4.19786 6.84194 4.44194L5.50892 5.77496H13.6C13.9452 5.77496 14.225 6.05479 14.225 6.39996C14.225 6.74514 13.9452 7.02496 13.6 7.02496H5.50885L6.84194 8.35806C7.08602 8.60214 7.08602 8.99786 6.84194 9.24194C6.59786 9.48602 6.20214 9.48602 5.95806 9.24194L3.55806 6.84194C3.49397 6.77785 3.44671 6.70331 3.41628 6.6238C3.38945 6.55372 3.3757 6.47979 3.37503 6.40575L3.375 6.39996C3.375 6.30848 3.39466 6.22158 3.42998 6.14327C3.45313 6.09184 3.48359 6.0429 3.52137 5.99803C3.53425 5.98271 3.54785 5.96801 3.56212 5.954L5.95806 3.55806C6.20214 3.31398 6.59786 3.31398 6.84194 3.55806ZM13.1579 10.758C13.402 10.514 13.7977 10.514 14.0418 10.758L16.4317 13.1479C16.5509 13.2617 16.6251 13.4222 16.6251 13.6C16.6251 13.779 16.55 13.9403 16.4295 14.0542L14.0418 16.4419C13.7977 16.686 13.402 16.686 13.1579 16.4419C12.9138 16.1978 12.9138 15.8021 13.1579 15.558L14.4909 14.225H6.40015C6.05497 14.225 5.77515 13.9452 5.77515 13.6C5.77515 13.2549 6.05497 12.975 6.40015 12.975H14.491L13.1579 11.6419C12.9138 11.3978 12.9138 11.0021 13.1579 10.758Z" fill="#ff8917"></path>
                                                              </svg>
                                                            </button>
                                                          </div>
                                                          <div class="placeInput flightDestination">
                                                            <p>Điểm đến</p>
                                                            <div class="inputInline">
                                                              <input type="text" placeholder="TP Hồ Chí Minh (SGN)" value="" dataCode="" name="destination" id="destination" class="form-control" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                            <div class="suggestDefault">
                                                              <div class="suggestDefault__header">
                                                                <div class="suggestDefault__input">
                                                                  <input type="text" placeholder="Thành phố, địa điểm, sân bay" id="destinationMobile" dataCode="" value="" class="form-control">
                                                                </div>
                                                                <button type="button" class="suggestDefault__close">
                                                                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                    <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                  </svg>
                                                                </button>
                                                              </div>
                                                              <div class="suggestDefault__body">
                                                                <div class="flightDefault">
                                                                  <div class="flightDefault__body">
                                                                    <ul class="flightDefault__tab">
                                                                    </ul>
                                                                    <div class="flightDefault__content">
                                                                      <ul class="flightDefault__list">
                                                                        ${flightHTML}
                                                                      </ul>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <ul class="listPlace hidden">
                                                                  ${airportHTML}
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="dateInput">
                                                            <label for="date">Ngày đi / ngày về</label>
                                                            <div class="inputInline">
                                                              <input type="text" id="datepickerFlight"  name="date" class="form-control">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.75 1.875H10.125V0.875C10.125 0.80625 10.0688 0.75 10 0.75H9.125C9.05625 0.75 9 0.80625 9 0.875V1.875H5V0.875C5 0.80625 4.94375 0.75 4.875 0.75H4C3.93125 0.75 3.875 0.80625 3.875 0.875V1.875H1.25C0.973437 1.875 0.75 2.09844 0.75 2.375V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V2.375C13.25 2.09844 13.0266 1.875 12.75 1.875ZM12.125 12.125H1.875V6.1875H12.125V12.125ZM1.875 5.125V3H3.875V3.75C3.875 3.81875 3.93125 3.875 4 3.875H4.875C4.94375 3.875 5 3.81875 5 3.75V3H9V3.75C9 3.81875 9.05625 3.875 9.125 3.875H10C10.0688 3.875 10.125 3.81875 10.125 3.75V3H12.125V5.125H1.875Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                          </div>
                                                          <div class="passengerBox">
                                                            <p>Số hành khách</p>
                                                            <div class="dropdown">
                                                              <button type="button" data-toggle="dropdown" class="dropdown-toggle"><span>1 người lớn, 0 trẻ em, 0 trẻ sơ sinh</span>
                                                                <svg width="14" height="14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.869 477.869" xml:space="preserve" class="svgArrow">
                                                                  <path d="M387.415,233.496c48.976-44.029,52.987-119.424,8.958-168.4C355.991,20.177,288.4,12.546,239.02,47.332                                                      c-53.83-37.99-128.264-25.149-166.254,28.68c-34.859,49.393-27.259,117.054,17.689,157.483                                                      c-55.849,29.44-90.706,87.481-90.453,150.613v51.2c0,9.426,7.641,17.067,17.067,17.067h443.733                                                      c9.426,0,17.067-7.641,17.067-17.067v-51.2C478.121,320.976,443.264,262.935,387.415,233.496z M307.201,59.842                                                      c47.062-0.052,85.256,38.057,85.309,85.119c0.037,33.564-19.631,64.023-50.237,77.799c-1.314,0.597-2.628,1.143-3.959,1.707                                                      c-4.212,1.699-8.556,3.051-12.988,4.045c-0.853,0.188-1.707,0.29-2.577,0.461c-4.952,0.949-9.977,1.457-15.019,1.519                                                      c-2.27,0-4.557-0.171-6.827-0.375c-0.853,0-1.707,0-2.56-0.171c-9.7-1.142-19.136-3.923-27.904-8.226                                                      c-0.324-0.154-0.7-0.137-1.024-0.273c-1.707-0.819-3.413-1.536-4.932-2.458c0.137-0.171,0.222-0.358,0.358-0.529                                                      c7.826-10.056,13.996-21.296,18.278-33.297l0.529-1.434c1.947-5.732,3.459-11.602,4.523-17.562c0.154-0.87,0.273-1.707,0.41-2.645                                                      c0.987-6.067,1.506-12.2,1.553-18.347c-0.049-6.135-0.568-12.257-1.553-18.313c-0.137-0.887-0.256-1.707-0.41-2.645                                                      c-1.064-5.959-2.576-11.83-4.523-17.562l-0.529-1.434c-4.282-12.001-10.453-23.241-18.278-33.297                                                      c-0.137-0.171-0.222-0.358-0.358-0.529C277.449,63.831,292.19,59.843,307.201,59.842z M85.335,145.176                                                      c-0.121-47.006,37.886-85.21,84.892-85.331c22.034-0.057,43.232,8.434,59.134,23.686c0.99,0.956,1.963,1.911,2.918,2.901                                                      c2.931,3.071,5.634,6.351,8.09,9.813c0.751,1.058,1.434,2.185,2.133,3.277c2.385,3.671,4.479,7.523,6.263,11.52                                                      c0.427,0.973,0.751,1.963,1.126,2.935c1.799,4.421,3.215,8.989,4.233,13.653c0.12,0.512,0.154,1.024,0.256,1.553                                                      c2.162,10.597,2.162,21.522,0,32.119c-0.102,0.529-0.137,1.041-0.256,1.553c-1.017,4.664-2.433,9.232-4.233,13.653                                                      c-0.375,0.973-0.7,1.963-1.126,2.935c-1.786,3.991-3.88,7.837-6.263,11.503c-0.7,1.092-1.382,2.219-2.133,3.277                                                      c-2.455,3.463-5.159,6.742-8.09,9.813c-0.956,0.99-1.929,1.946-2.918,2.901c-6.91,6.585-14.877,11.962-23.569,15.906                                                      c-1.382,0.631-2.782,1.212-4.198,1.707c-4.114,1.633-8.347,2.945-12.663,3.925c-1.075,0.239-2.185,0.375-3.277,0.563                                                      c-4.634,0.863-9.333,1.336-14.046,1.417h-1.877c-4.713-0.08-9.412-0.554-14.046-1.417c-1.092-0.188-2.202-0.324-3.277-0.563                                                      c-4.316-0.98-8.55-2.292-12.663-3.925c-1.417-0.563-2.816-1.143-4.198-1.707C105.013,209.057,85.374,178.677,85.335,145.176z                                                      M307.201,418.242H34.135v-34.133c-0.25-57.833,36.188-109.468,90.76-128.614c29.296,12.197,62.249,12.197,91.546,0                                                      c5.698,2.082,11.251,4.539,16.623,7.356c3.55,1.826,6.827,3.908,10.24,6.007c2.219,1.382,4.471,2.731,6.605,4.25                                                      c3.294,2.338,6.4,4.881,9.455,7.492c1.963,1.707,3.908,3.413,5.751,5.12c2.816,2.662,5.461,5.478,8.004,8.363                                                      c1.826,2.082,3.601,4.198,5.291,6.383c2.236,2.867,4.369,5.803,6.349,8.823c1.707,2.56,3.226,5.222,4.727,7.885                                                      c1.707,2.935,3.277,5.871,4.71,8.926c1.434,3.055,2.697,6.4,3.925,9.66c1.075,2.833,2.219,5.649,3.106,8.533                                                      c1.195,3.959,2.031,8.055,2.867,12.151c0.512,2.423,1.178,4.796,1.553,7.253c1.011,6.757,1.53,13.579,1.553,20.412V418.242z                                                      M443.735,418.242h-102.4v-34.133c0-5.342-0.307-10.633-0.785-15.872c-0.137-1.536-0.375-3.055-0.546-4.591                                                      c-0.461-3.772-0.99-7.509-1.707-11.213c-0.307-1.581-0.631-3.169-0.973-4.762c-0.819-3.8-1.769-7.566-2.85-11.298                                                      c-0.358-1.229-0.683-2.475-1.058-3.686c-4.779-15.277-11.704-29.797-20.565-43.127l-0.666-0.973                                                      c-2.935-4.358-6.07-8.573-9.404-12.646l-0.119-0.154c-3.413-4.232-7.117-8.346-11.008-12.237c0.222,0,0.461,0,0.7,0                                                      c4.816,0.633,9.666,0.975,14.524,1.024h0.939c4.496-0.039,8.985-0.33,13.449-0.87c1.399-0.171,2.782-0.427,4.181-0.649                                                      c3.63-0.557,7.214-1.28,10.752-2.167c1.007-0.256,2.031-0.495,3.055-0.785c4.643-1.263,9.203-2.814,13.653-4.642                                                      c54.612,19.127,91.083,70.785,90.829,128.649V418.242z" fill="#8c8c8c"></path>
                                                                </svg>
                                                              </button>
                                                              <div class="dropdown-menu">
                                                                <div class="passengerBox__backdrop"></div>
                                                                <div class="passengerBox__body">
                                                                  <div class="headerPopup">
                                                                    <p>Số hành khách</p>
                                                                    <button type="button" class="headerPopup__close">
                                                                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                        <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                      </svg>
                                                                    </button>
                                                                  </div>
                                                                  <div class="passengerBox__main">
                                                                    <div class="passengerBox__item" id='adult'>
                                                                      <button type="button" class="passengerBox__minus vntDisabled">
                                                                        <svg width="16" height="16" viewBox="0 -192 426.66667 426" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                      <p>1 người lớn</p>
                                                                      <button type="button" class="passengerBox__plus ">
                                                                        <svg width="14" height="14" viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                    </div>
                                                                    <div class="passengerBox__item" id='child'>
                                                                      <button type="button" class="passengerBox__minus vntDisabled">
                                                                        <svg width="14" height="14" viewBox="0 -192 426.66667 426" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                      <p>0 trẻ em<span class="d-block">2 - 12 tuổi</span></p>
                                                                      <button type="button" class="passengerBox__plus">
                                                                        <svg width="14" height="14" viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                    </div>
                                                                    <div class="passengerBox__item" id='infant'>
                                                                      <button type="button" class="passengerBox__minus vntDisabled">
                                                                        <svg width="14" height="14" viewBox="0 -192 426.66667 426" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                      <p>0 trẻ sơ sinh<span class="d-block">&lt; 2 tuổi</span></p>
                                                                      <button type="button" class="passengerBox__plus">
                                                                        <svg width="14" height="14" viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="vntSearch__btn">
                                                            <button type="submit" class="btn btn_orange" name="btnSearchFlight" id='btnSearchFlight'>
                                                              <span>Tìm kiếm</span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                    <form>
                                                  </div>
                                                </div>
                                           </div>
                                        </div>
                                   </div>
                            `)
                        }else {
                            $("#vntripSearchBox").html(`
                                   <div class="vntSearch">
                                        <div class="container">
                                           <div class="vntSearch__body">
                                                <ul class="vntSearch__tab">
                                                  <li class="active">
                                                    <button type="button" id="btnHotel">
                                                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.18667 1.24714L1.86 0.133809C1.52 0.0804752 1.17333 0.173809 0.913333 0.393809C0.653333 0.620475 0.5 0.947142 0.5 1.28714V15.3338C0.5 15.7005 0.8 16.0005 1.16667 16.0005H3.33333V12.5005C3.33333 11.8538 3.85333 11.3338 4.5 11.3338H6.16667C6.81333 11.3338 7.33333 11.8538 7.33333 12.5005V16.0005H10.1667V2.40048C10.1667 1.82714 9.75333 1.34048 9.18667 1.24714ZM4.16667 9.83381H3.16667C2.89067 9.83381 2.66667 9.60981 2.66667 9.33381C2.66667 9.05781 2.89067 8.83381 3.16667 8.83381H4.16667C4.44267 8.83381 4.66667 9.05781 4.66667 9.33381C4.66667 9.60981 4.44267 9.83381 4.16667 9.83381ZM4.16667 7.83381H3.16667C2.89067 7.83381 2.66667 7.60981 2.66667 7.33381C2.66667 7.05781 2.89067 6.83381 3.16667 6.83381H4.16667C4.44267 6.83381 4.66667 7.05781 4.66667 7.33381C4.66667 7.60981 4.44267 7.83381 4.16667 7.83381ZM4.16667 5.83381H3.16667C2.89067 5.83381 2.66667 5.60981 2.66667 5.33381C2.66667 5.05781 2.89067 4.83381 3.16667 4.83381H4.16667C4.44267 4.83381 4.66667 5.05781 4.66667 5.33381C4.66667 5.60981 4.44267 5.83381 4.16667 5.83381ZM4.16667 3.83381H3.16667C2.89067 3.83381 2.66667 3.60981 2.66667 3.33381C2.66667 3.05781 2.89067 2.83381 3.16667 2.83381H4.16667C4.44267 2.83381 4.66667 3.05781 4.66667 3.33381C4.66667 3.60981 4.44267 3.83381 4.16667 3.83381ZM7.5 9.83381H6.5C6.224 9.83381 6 9.60981 6 9.33381C6 9.05781 6.224 8.83381 6.5 8.83381H7.5C7.776 8.83381 8 9.05781 8 9.33381C8 9.60981 7.776 9.83381 7.5 9.83381ZM7.5 7.83381H6.5C6.224 7.83381 6 7.60981 6 7.33381C6 7.05781 6.224 6.83381 6.5 6.83381H7.5C7.776 6.83381 8 7.05781 8 7.33381C8 7.60981 7.776 7.83381 7.5 7.83381ZM7.5 5.83381H6.5C6.224 5.83381 6 5.60981 6 5.33381C6 5.05781 6.224 4.83381 6.5 4.83381H7.5C7.776 4.83381 8 5.05781 8 5.33381C8 5.60981 7.776 5.83381 7.5 5.83381ZM7.5 3.83381H6.5C6.224 3.83381 6 3.60981 6 3.33381C6 3.05781 6.224 2.83381 6.5 2.83381H7.5C7.776 2.83381 8 3.05781 8 3.33381C8 3.60981 7.776 3.83381 7.5 3.83381Z" fill="#595959"></path>
                                                        <path d="M15.5797 7.22838L10.833 6.23438V16.0004H15.333C15.9763 16.0004 16.4997 15.477 16.4997 14.8337V8.36838C16.4997 7.81771 16.1243 7.34904 15.5797 7.22838ZM13.9997 14.0004H12.9997C12.7237 14.0004 12.4997 13.7764 12.4997 13.5004C12.4997 13.2244 12.7237 13.0004 12.9997 13.0004H13.9997C14.2757 13.0004 14.4997 13.2244 14.4997 13.5004C14.4997 13.7764 14.2757 14.0004 13.9997 14.0004ZM13.9997 12.0004H12.9997C12.7237 12.0004 12.4997 11.7764 12.4997 11.5004C12.4997 11.2244 12.7237 11.0004 12.9997 11.0004H13.9997C14.2757 11.0004 14.4997 11.2244 14.4997 11.5004C14.4997 11.7764 14.2757 12.0004 13.9997 12.0004ZM13.9997 10.0004H12.9997C12.7237 10.0004 12.4997 9.77638 12.4997 9.50038C12.4997 9.22438 12.7237 9.00038 12.9997 9.00038H13.9997C14.2757 9.00038 14.4997 9.22438 14.4997 9.50038C14.4997 9.77638 14.2757 10.0004 13.9997 10.0004Z" fill="#595959"></path>
                                                      </svg>
                                                      <span>Khách sạn</span>
                                                    </button>
                                                  </li>
                                                  <li class="">
                                                    <button type="button" id="btnFlight">
                                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.492 5.15934C6.492 5.29734 6.49334 5.41269 6.49534 5.49934L1.19066 9.33066C0.758 9.64334 0.5 10.148 0.5 10.6813L0.5 11C0.5 11.1007 0.545344 11.1953 0.623344 11.2587C0.701344 11.322 0.804 11.3467 0.902 11.326L6.872 10.0693L7.15266 12.876L5.264 14.764C5.202 14.8267 5.16666 14.9113 5.16666 15L5.16666 15.6667C5.16666 15.776 5.22066 15.878 5.31 15.9407C5.4 16.0027 5.51466 16.0173 5.61666 15.9787L7.96 15.1L8.184 15.772C8.22934 15.908 8.35666 16 8.5 16C8.64334 16 8.77066 15.908 8.816 15.772L9.04 15.1L11.3827 15.9787C11.4853 16.0173 11.6 16.0027 11.6893 15.9407C11.7793 15.878 11.8333 15.776 11.8333 15.6667L11.8333 15C11.8333 14.9113 11.798 14.8267 11.736 14.764L9.84731 12.8753L10.128 10.0687L16.098 11.3253C16.196 11.346 16.2986 11.3213 16.3766 11.258C16.4546 11.1953 16.5 11.1007 16.5 11L16.5 10.6813C16.5 10.148 16.242 9.64269 15.8093 9.33069L10.5047 5.49934C10.506 5.41269 10.508 5.29734 10.508 5.15934C10.508 3.23266 10.2473 -4.2607e-07 8.5 -3.49691e-07C6.75266 -2.73312e-07 6.492 3.23266 6.492 5.15934ZM9.49 2.91934C9.49666 2.946 9.5 2.97334 9.5 3C9.5 3.14934 9.39934 3.28534 9.24734 3.32266C9.06869 3.36731 8.888 3.25866 8.84334 3.08C8.84269 3.07866 8.72469 2.66666 8.5 2.66666C8.27531 2.66666 8.15734 3.07866 8.156 3.08266C8.10934 3.26 7.928 3.36731 7.75066 3.322C7.57266 3.27666 7.464 3.096 7.51 2.91934C7.59534 2.578 7.9 2 8.5 2C9.1 2 9.40466 2.578 9.49 2.91934Z" fill="#595959"></path>
                                                        </svg>
                                                        <span>Máy bay</span>
                                                    </button>
                                                  </li>
                                                </ul>
                                                <div class="vntSearch__main">
                                                  <div class="vntSearch__hotel open">
                                                    <form action="" method="get" id="formValidateHotel">
                                                        <div class="vntSearch__flex">
                                                          <div class="placeInput">
                                                            <p>Thành phố, địa điểm hoặc tên khách sạn</p>
                                                            <div class="inputInline">
                                                              <input id="inputHotelDomestics" name="inputHotelDomestics" value="" dataSeoUrl="" type="text" class="form-control" placeholder="Nhập điểm đến, khách sạn" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                            <div class="suggestDefault">
                                                              <div class="suggestDefault__header">
                                                                <div class="suggestDefault__input">
                                                                  <input id="inputHotelDomesticsMobile" dataSeoUrl="" name="inputHotelDomesticsMobile" value="" type="text" class="form-control" placeholder="Nhập điểm đến, khách sạn" autocomplete="off">
                                                                </div>
                                                                <button type="button" class="suggestDefault__close">
                                                                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                    <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                  </svg>
                                                                </button>
                                                              </div>
                                                              <div class="suggestDefault__body">
                                                                <p class="suggestDefault__title">Các điểm đến phổ biến</p>
                                                                <ul class="listPlace">
                                                                        ${domesticsHtml}
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="dateInput">
                                                            <p>Ngày nhận phòng / trả phòng</p>
                                                            <div class="inputInline">
                                                              <input id="datepicker" type="text" name="dates" value="" class="form-control" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.75 1.875H10.125V0.875C10.125 0.80625 10.0688 0.75 10 0.75H9.125C9.05625 0.75 9 0.80625 9 0.875V1.875H5V0.875C5 0.80625 4.94375 0.75 4.875 0.75H4C3.93125 0.75 3.875 0.80625 3.875 0.875V1.875H1.25C0.973437 1.875 0.75 2.09844 0.75 2.375V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V2.375C13.25 2.09844 13.0266 1.875 12.75 1.875ZM12.125 12.125H1.875V6.1875H12.125V12.125ZM1.875 5.125V3H3.875V3.75C3.875 3.81875 3.93125 3.875 4 3.875H4.875C4.94375 3.875 5 3.81875 5 3.75V3H9V3.75C9 3.81875 9.05625 3.875 9.125 3.875H10C10.0688 3.875 10.125 3.81875 10.125 3.75V3H12.125V5.125H1.875Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                          </div>
                                                          <div class="vntSearch__btn">
                                                            <button id="btnSearchHotel" type="submit" name="btnSearchHotel" class="btn btn_orange">Tìm kiếm</button>
                                                          </div>
                                                        </div>
                                                    </form>
                                                  </div>
                                                  <div class="vntSearch__flight">
                                                    <form action="" method="get" id="formValidateFlight">
                                                        <div class="vntSearch__radio">
                                                          <div class="radio">
                                                            <input checked id="fl1" type="radio" name="flight" value="false">
                                                            <label for="fl1">Một chiều</label>
                                                          </div>
                                                          <div class="radio">
                                                            <input id="fl2" type="radio" name="flight" value="true">
                                                            <label for="fl2">Khứ hồi</label>
                                                          </div>
                                                        </div>
                                                        <div class="vntSearch__flex">
                                                          <div class="placeInput flightOrigin">
                                                            <p>Điểm đi</p>
                                                            <div class="inputInline">
                                                              <input type="text" placeholder="Hà Nội (HAN)" name="origin" id="origin" dataCode="" value="" class="form-control" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                            <div class="suggestDefault">
                                                              <div class="suggestDefault__header">
                                                                <div class="suggestDefault__input">
                                                                  <input type="text" id="originMobile" placeholder="Thành phố, địa điểm, sân bay" dataCode="" value="" class="form-control">
                                                                </div>
                                                                <button type="button" class="suggestDefault__close">
                                                                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                    <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                  </svg>
                                                                </button>
                                                              </div>
                                                              <div class="suggestDefault__body">
                                                                <div class="flightDefault">
                                                                  <div class="flightDefault__body">
                                                                    <ul class="flightDefault__tab">
                                                                    </ul>
                                                                    <div class="flightDefault__content">
                                                                      <ul class="flightDefault__list">
                                                                        ${flightHTML}
                                                                      </ul>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <ul class="listPlace hidden" id='airport'>
                                                                  ${airportHTML}
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="vntSearch__toggle">
                                                            <button type="button" class="flightToggle">
                                                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM6.84194 3.55806C7.08602 3.80214 7.08602 4.19786 6.84194 4.44194L5.50892 5.77496H13.6C13.9452 5.77496 14.225 6.05479 14.225 6.39996C14.225 6.74514 13.9452 7.02496 13.6 7.02496H5.50885L6.84194 8.35806C7.08602 8.60214 7.08602 8.99786 6.84194 9.24194C6.59786 9.48602 6.20214 9.48602 5.95806 9.24194L3.55806 6.84194C3.49397 6.77785 3.44671 6.70331 3.41628 6.6238C3.38945 6.55372 3.3757 6.47979 3.37503 6.40575L3.375 6.39996C3.375 6.30848 3.39466 6.22158 3.42998 6.14327C3.45313 6.09184 3.48359 6.0429 3.52137 5.99803C3.53425 5.98271 3.54785 5.96801 3.56212 5.954L5.95806 3.55806C6.20214 3.31398 6.59786 3.31398 6.84194 3.55806ZM13.1579 10.758C13.402 10.514 13.7977 10.514 14.0418 10.758L16.4317 13.1479C16.5509 13.2617 16.6251 13.4222 16.6251 13.6C16.6251 13.779 16.55 13.9403 16.4295 14.0542L14.0418 16.4419C13.7977 16.686 13.402 16.686 13.1579 16.4419C12.9138 16.1978 12.9138 15.8021 13.1579 15.558L14.4909 14.225H6.40015C6.05497 14.225 5.77515 13.9452 5.77515 13.6C5.77515 13.2549 6.05497 12.975 6.40015 12.975H14.491L13.1579 11.6419C12.9138 11.3978 12.9138 11.0021 13.1579 10.758Z" fill="#ff8917"></path>
                                                              </svg>
                                                            </button>
                                                          </div>
                                                          <div class="placeInput flightDestination">
                                                            <p>Điểm đến</p>
                                                            <div class="inputInline">
                                                              <input type="text" placeholder="TP Hồ Chí Minh (SGN)" value="" dataCode="" name="destination" id="destination" class="form-control" autocomplete="off">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                            <div class="suggestDefault">
                                                              <div class="suggestDefault__header">
                                                                <div class="suggestDefault__input">
                                                                  <input type="text" placeholder="Thành phố, địa điểm, sân bay" id="destinationMobile" dataCode="" value="" class="form-control">
                                                                </div>
                                                                <button type="button" class="suggestDefault__close">
                                                                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                    <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                  </svg>
                                                                </button>
                                                              </div>
                                                              <div class="suggestDefault__body">
                                                                <div class="flightDefault">
                                                                  <div class="flightDefault__body">
                                                                    <ul class="flightDefault__tab">
                                                                    </ul>
                                                                    <div class="flightDefault__content">
                                                                      <ul class="flightDefault__list">
                                                                        ${flightHTML}
                                                                      </ul>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <ul class="listPlace hidden">
                                                                  ${airportHTML}
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="dateInput">
                                                            <label for="date">Ngày đi / ngày về</label>
                                                            <div class="inputInline">
                                                              <input type="text" id="datepickerFlight"  name="date" class="form-control">
                                                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.75 1.875H10.125V0.875C10.125 0.80625 10.0688 0.75 10 0.75H9.125C9.05625 0.75 9 0.80625 9 0.875V1.875H5V0.875C5 0.80625 4.94375 0.75 4.875 0.75H4C3.93125 0.75 3.875 0.80625 3.875 0.875V1.875H1.25C0.973437 1.875 0.75 2.09844 0.75 2.375V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V2.375C13.25 2.09844 13.0266 1.875 12.75 1.875ZM12.125 12.125H1.875V6.1875H12.125V12.125ZM1.875 5.125V3H3.875V3.75C3.875 3.81875 3.93125 3.875 4 3.875H4.875C4.94375 3.875 5 3.81875 5 3.75V3H9V3.75C9 3.81875 9.05625 3.875 9.125 3.875H10C10.0688 3.875 10.125 3.81875 10.125 3.75V3H12.125V5.125H1.875Z" fill="#8C8C8C"></path>
                                                              </svg>
                                                            </div>
                                                          </div>
                                                          <div class="passengerBox">
                                                            <p>Số hành khách</p>
                                                            <div class="dropdown">
                                                              <button type="button" data-toggle="dropdown" class="dropdown-toggle"><span>1 người lớn, 0 trẻ em, 0 trẻ sơ sinh</span>
                                                                <svg width="14" height="14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.869 477.869" xml:space="preserve" class="svgArrow">
                                                                  <path d="M387.415,233.496c48.976-44.029,52.987-119.424,8.958-168.4C355.991,20.177,288.4,12.546,239.02,47.332                                                      c-53.83-37.99-128.264-25.149-166.254,28.68c-34.859,49.393-27.259,117.054,17.689,157.483                                                      c-55.849,29.44-90.706,87.481-90.453,150.613v51.2c0,9.426,7.641,17.067,17.067,17.067h443.733                                                      c9.426,0,17.067-7.641,17.067-17.067v-51.2C478.121,320.976,443.264,262.935,387.415,233.496z M307.201,59.842                                                      c47.062-0.052,85.256,38.057,85.309,85.119c0.037,33.564-19.631,64.023-50.237,77.799c-1.314,0.597-2.628,1.143-3.959,1.707                                                      c-4.212,1.699-8.556,3.051-12.988,4.045c-0.853,0.188-1.707,0.29-2.577,0.461c-4.952,0.949-9.977,1.457-15.019,1.519                                                      c-2.27,0-4.557-0.171-6.827-0.375c-0.853,0-1.707,0-2.56-0.171c-9.7-1.142-19.136-3.923-27.904-8.226                                                      c-0.324-0.154-0.7-0.137-1.024-0.273c-1.707-0.819-3.413-1.536-4.932-2.458c0.137-0.171,0.222-0.358,0.358-0.529                                                      c7.826-10.056,13.996-21.296,18.278-33.297l0.529-1.434c1.947-5.732,3.459-11.602,4.523-17.562c0.154-0.87,0.273-1.707,0.41-2.645                                                      c0.987-6.067,1.506-12.2,1.553-18.347c-0.049-6.135-0.568-12.257-1.553-18.313c-0.137-0.887-0.256-1.707-0.41-2.645                                                      c-1.064-5.959-2.576-11.83-4.523-17.562l-0.529-1.434c-4.282-12.001-10.453-23.241-18.278-33.297                                                      c-0.137-0.171-0.222-0.358-0.358-0.529C277.449,63.831,292.19,59.843,307.201,59.842z M85.335,145.176                                                      c-0.121-47.006,37.886-85.21,84.892-85.331c22.034-0.057,43.232,8.434,59.134,23.686c0.99,0.956,1.963,1.911,2.918,2.901                                                      c2.931,3.071,5.634,6.351,8.09,9.813c0.751,1.058,1.434,2.185,2.133,3.277c2.385,3.671,4.479,7.523,6.263,11.52                                                      c0.427,0.973,0.751,1.963,1.126,2.935c1.799,4.421,3.215,8.989,4.233,13.653c0.12,0.512,0.154,1.024,0.256,1.553                                                      c2.162,10.597,2.162,21.522,0,32.119c-0.102,0.529-0.137,1.041-0.256,1.553c-1.017,4.664-2.433,9.232-4.233,13.653                                                      c-0.375,0.973-0.7,1.963-1.126,2.935c-1.786,3.991-3.88,7.837-6.263,11.503c-0.7,1.092-1.382,2.219-2.133,3.277                                                      c-2.455,3.463-5.159,6.742-8.09,9.813c-0.956,0.99-1.929,1.946-2.918,2.901c-6.91,6.585-14.877,11.962-23.569,15.906                                                      c-1.382,0.631-2.782,1.212-4.198,1.707c-4.114,1.633-8.347,2.945-12.663,3.925c-1.075,0.239-2.185,0.375-3.277,0.563                                                      c-4.634,0.863-9.333,1.336-14.046,1.417h-1.877c-4.713-0.08-9.412-0.554-14.046-1.417c-1.092-0.188-2.202-0.324-3.277-0.563                                                      c-4.316-0.98-8.55-2.292-12.663-3.925c-1.417-0.563-2.816-1.143-4.198-1.707C105.013,209.057,85.374,178.677,85.335,145.176z                                                      M307.201,418.242H34.135v-34.133c-0.25-57.833,36.188-109.468,90.76-128.614c29.296,12.197,62.249,12.197,91.546,0                                                      c5.698,2.082,11.251,4.539,16.623,7.356c3.55,1.826,6.827,3.908,10.24,6.007c2.219,1.382,4.471,2.731,6.605,4.25                                                      c3.294,2.338,6.4,4.881,9.455,7.492c1.963,1.707,3.908,3.413,5.751,5.12c2.816,2.662,5.461,5.478,8.004,8.363                                                      c1.826,2.082,3.601,4.198,5.291,6.383c2.236,2.867,4.369,5.803,6.349,8.823c1.707,2.56,3.226,5.222,4.727,7.885                                                      c1.707,2.935,3.277,5.871,4.71,8.926c1.434,3.055,2.697,6.4,3.925,9.66c1.075,2.833,2.219,5.649,3.106,8.533                                                      c1.195,3.959,2.031,8.055,2.867,12.151c0.512,2.423,1.178,4.796,1.553,7.253c1.011,6.757,1.53,13.579,1.553,20.412V418.242z                                                      M443.735,418.242h-102.4v-34.133c0-5.342-0.307-10.633-0.785-15.872c-0.137-1.536-0.375-3.055-0.546-4.591                                                      c-0.461-3.772-0.99-7.509-1.707-11.213c-0.307-1.581-0.631-3.169-0.973-4.762c-0.819-3.8-1.769-7.566-2.85-11.298                                                      c-0.358-1.229-0.683-2.475-1.058-3.686c-4.779-15.277-11.704-29.797-20.565-43.127l-0.666-0.973                                                      c-2.935-4.358-6.07-8.573-9.404-12.646l-0.119-0.154c-3.413-4.232-7.117-8.346-11.008-12.237c0.222,0,0.461,0,0.7,0                                                      c4.816,0.633,9.666,0.975,14.524,1.024h0.939c4.496-0.039,8.985-0.33,13.449-0.87c1.399-0.171,2.782-0.427,4.181-0.649                                                      c3.63-0.557,7.214-1.28,10.752-2.167c1.007-0.256,2.031-0.495,3.055-0.785c4.643-1.263,9.203-2.814,13.653-4.642                                                      c54.612,19.127,91.083,70.785,90.829,128.649V418.242z" fill="#8c8c8c"></path>
                                                                </svg>
                                                              </button>
                                                              <div class="dropdown-menu">
                                                                <div class="passengerBox__backdrop"></div>
                                                                <div class="passengerBox__body">
                                                                  <div class="headerPopup">
                                                                    <p>Số hành khách</p>
                                                                    <button type="button" class="headerPopup__close">
                                                                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.4434 1.44332L9.91017 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                        <path d="M10.1464 1.44332L1.67967 9.91009" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                                                      </svg>
                                                                    </button>
                                                                  </div>
                                                                  <div class="passengerBox__main">
                                                                    <div class="passengerBox__item" id='adult'>
                                                                      <button type="button" class="passengerBox__minus vntDisabled">
                                                                        <svg width="16" height="16" viewBox="0 -192 426.66667 426" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                      <p>1 người lớn</p>
                                                                      <button type="button" class="passengerBox__plus ">
                                                                        <svg width="14" height="14" viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                    </div>
                                                                    <div class="passengerBox__item" id='child'>
                                                                      <button type="button" class="passengerBox__minus vntDisabled">
                                                                        <svg width="14" height="14" viewBox="0 -192 426.66667 426" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                      <p>0 trẻ em<span class="d-block">2 - 12 tuổi</span></p>
                                                                      <button type="button" class="passengerBox__plus">
                                                                        <svg width="14" height="14" viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                    </div>
                                                                    <div class="passengerBox__item" id='infant'>
                                                                      <button type="button" class="passengerBox__minus vntDisabled">
                                                                        <svg width="14" height="14" viewBox="0 -192 426.66667 426" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                      <p>0 trẻ sơ sinh<span class="d-block">&lt; 2 tuổi</span></p>
                                                                      <button type="button" class="passengerBox__plus">
                                                                        <svg width="14" height="14" viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg">
                                                                          <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"></path>
                                                                        </svg>
                                                                      </button>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="vntSearch__btn">
                                                            <button type="submit" class="btn btn_orange" name="btnSearchFlight" id='btnSearchFlight'>
                                                              <span>Tìm kiếm</span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                    <form>
                                                  </div>
                                                </div>
                                           </div>
                                        </div>
                                   </div>
                            `)
                        }

                        //redirect to
                        $("#iframeVntrip").html(`
                           <iframe id="iframeVntripSearchBox" src="" scrolling="auto" style=" width: 100%; height: 100%;" ></iframe>
                        `)
                        var direct = window.location.toString(),
                            paramsHotel = direct.split("khach-san")[1],
                            paramsFlight = direct.split("tim-ve-may-bay")[1],
                            iframeVNT = document.getElementById('iframeVntripSearchBox');
                        if (paramsHotel) {
                            iframeVNT.src = "https://webview.vntrip.vn/khach-san" + paramsHotel;
                        } else if (paramsFlight) {
                            iframeVNT.src = "https://webview.vntrip.vn/tim-ve-may-bay" + paramsFlight;
                        }

                        //-------------hotel----------------

                        //set delay keyup
                        var delay = (function(){
                            var timer = 0;
                            return function(callback, ms){
                                clearTimeout (timer);
                                timer = setTimeout(callback, ms);
                            };
                        })();

                        // * call api *
                        let _domesticsCity = [],
                            _domesticsHotel = [];
                        $( "#inputHotelDomestics" ).keyup(function() {
                            $('.suggestDefault').addClass('open')
                            delay(function(){
                                function fetchDataSuggestionHotel(url, callback) {
                                    $.ajax({
                                        dataType: "json",
                                        type: "GET",
                                        url: url,
                                        async: true,
                                        success: function(response) {
                                                callback(response);
                                        }
                                    })
                                }

                                let inputHotelDomestics = $('#inputHotelDomestics').val();
                                fetchDataSuggestionHotel('https://micro-services.vntrip.vn/search-engine/search/suggestion-v2?keyword=' + inputHotelDomestics, data => {
                                    var resultCity = '';
                                    if(data && data.status === 'success') {
                                        _domesticsCity = data.data.regions;
                                        _domesticsCity.forEach(value => {
                                            const data = ` <li class="listPlace__item">
                                                             <button class="btnPlaceHotel" type="button" dataSeoUrl=${value.seo_url}>
                                                                   <div class="listPlace__text">
                                                                         <p class="p1">${value.regionname_vi}</p>
                                                                   </div>
                                                             </button>
                                                         </li>`
                                            resultCity += data
                                        });

                                        let titleHotel = '<p class="suggestDefault__title">Khách sạn</p>';
                                        let resultHotel = '';
                                        _domesticsHotel = data.data.hotels;
                                        _domesticsHotel.forEach(values => {
                                            const data = `<li class="listPlace__item">
                                                         <button class="btnPlaceHotel" type="button" dataSeoUrl="" dataID=${values.id}>
                                                               <div class="listPlace__text">
                                                                     <p class="p1">${values.name_vi}</p>
                                                               </div>
                                                         </button>
                                                    </li>`
                                            resultHotel += data
                                        });
                                        resultCityHotel = resultCity + titleHotel + resultHotel

                                        $('.listPlace').html('')
                                        $('.listPlace').html(resultCityHotel)
                                    }
                                });
                            }, 200 );
                        });

                        // * search mobile *
                        let _domesticsCityMobile = [],
                            _domesticsHotelMobile = [];
                        $( "#inputHotelDomesticsMobile" ).keyup(function() {
                            $('.suggestDefault').addClass('open')
                            delay(function(){
                                function fetchDataSuggestionHotel(url, callback) {
                                    $.ajax({
                                        dataType: "json",
                                        type: "GET",
                                        url: url,
                                        async: true,
                                        success: function(response) {
                                            callback(response);
                                        }
                                    });
                                }

                                let inputHotelDomesticsMobile = $('#inputHotelDomesticsMobile').val();
                                fetchDataSuggestionHotel('https://micro-services.vntrip.vn/search-engine/search/suggestion-v2?keyword=' + inputHotelDomesticsMobile, data => {
                                    let resultCityMobile = '';
                                    if(data && data.status === 'success') {
                                        _domesticsCityMobile = data.data.regions;
                                        _domesticsCityMobile.forEach(value => {
                                            const data = ` <li class="listPlace__item">
                                                 <button class="btnPlaceHotel" type="button" dataSeoUrl=${value.seo_url}>
                                                       <div class="listPlace__text">
                                                             <p class="p1">${value.regionname_vi}</p>
                                                       </div>
                                                 </button>
                                             </li>`
                                            resultCityMobile += data
                                        });

                                        let titleHotels = '<p class="suggestDefault__title">Khách sạn</p>';
                                        let resultHotelMobile = '';
                                        _domesticsHotelMobile = data.data.hotels;
                                        _domesticsHotelMobile.forEach(values => {
                                            const data = `<li class="listPlace__item">
                                                 <button class="btnPlaceHotel" type="button" dataSeoUrl="" dataId=${values.id}>
                                                       <div class="listPlace__text">
                                                             <p class="p1">${values.name_vi}</p>
                                                       </div>
                                                 </button>
                                            </li>`
                                            resultHotelMobile += data
                                        });
                                        resultCityHotelMobile = resultCityMobile + titleHotels + resultHotelMobile

                                        $('.listPlace').html('')
                                        $('.listPlace').html(resultCityHotelMobile)
                                    }
                                });
                            }, 200 );
                        });

                        // * click button suggestion hotel return input *
                        $('#vntripSearchBox').on('click', '.btnPlaceHotel', function() {
                            let seoUrl =  $(this).attr("dataSeoUrl");
                            let dataId = $(this).attr("dataId");
                            $('#inputHotelDomestics').attr('dataSeoUrl', seoUrl);
                            $('#inputHotelDomestics').attr('dataId', dataId);
                            $('#inputHotelDomesticsMobile').attr('dataSeoUrl', seoUrl);
                            $('#inputHotelDomesticsMobile').attr('dataId', dataId);
                            $('.suggestDefault').removeClass('open');
                            let text = $(this).text();
                            $("#inputHotelDomestics").val(text.trim());
                            $("#inputHotelDomesticsMobile").val(text.trim());
                        })

                        // * load datepicker *
                        if($.fn.daterangepicker) {
                            $('input[name="dates"]').daterangepicker({
                                "opens": "center",
                                "autoApply": true,
                                startDate: moment(),
                                endDate: moment().add(1, 'days'),
                                locale: {
                                    format: formatDate
                                },
                                minDate: moment()
                            },function (start, end) {
                                if(moment(start).format(formatDate) === moment(end).format(formatDate)) {
                                    $('input[name="dates"]').data('daterangepicker').setEndDate(moment(start).add(1, 'days'));
                                }
                            });
                        }

                        // * submit search url *
                        $('#btnSearchHotel').click(function(e) {
                            if ($("#inputHotelDomestics").val()){
                                e.preventDefault()
                                let arrayDate = $('#datepicker').val().split('-'),
                                    startDate = arrayDate[0],
                                    endDate = arrayDate[1];
                                const diffDate = moment(endDate, formatDate).diff(moment(startDate, formatDate), 'days');

                                if($('#inputHotelDomestics').attr("dataSeoUrl") === ''){
                                    var params = $('#inputHotelDomestics').val().toLowerCase() + '-' + $('#inputHotelDomestics').attr("dataID") + "?checkInDate=" + moment(startDate, formatDate).format(formatDate1) + '&days=' + diffDate;
                                }
                                else{
                                    var params = $('#inputHotelDomestics').attr("dataSeoUrl") + "?checkInDate=" + moment(startDate, formatDate).format(formatDate1) + '&days=' + diffDate;
                                }

                                params = formatStringUrl(params)

                                if(redirect_to === ''){
                                    if (redirect_type === "new_tab" ) {
                                        window.open("https://webview.vntrip.vn/khach-san/" + params);
                                    }else{
                                        window.location = "https://webview.vntrip.vn/khach-san/" + params;
                                    }
                                }else{
                                    if (redirect_type === "new_tab" ) {
                                        window.open(redirect_to + "/webview_url=webview.vntrip.vn/khach-san/" + params);
                                    }else{
                                        window.location = redirect_to + "/webview_url=webview.vntrip.vn/khach-san/" + params;
                                    }
                                }
                            }
                            else {
                                $("#formValidateHotel").validate ({
                                    rules: {
                                        inputHotelDomestics: "required"
                                    },
                                    messages: {
                                        inputHotelDomestics: "Vui lòng nhập địa điểm"
                                    }
                                });
                            }
                        });


                        //-------------flight--------------

                        //search flight
                        $("#origin").on("keyup", function() {
                            var search = $(this).val().toLowerCase();
                            $(".listPlace__item").each(function() {
                                if ($(this).html().toLowerCase().indexOf(search) != -1) {
                                    $(this).show();
                                }
                                else {
                                    $(this).hide();
                                }
                            });
                        });

                        $("#destination").on("keyup", function() {
                            var search = $(this).val().toLowerCase();
                            $(".listPlace__item").each(function() {
                                if ($(this).html().toLowerCase().indexOf(search) != -1) {
                                    $(this).show();
                                }
                                else {
                                    $(this).hide();
                                }
                            });
                        });

                        //search mobile
                        $("#originMobile").on("keyup", function() {
                            var search = $(this).val().toLowerCase();
                            $(".listPlace__item").each(function() {
                                if ($(this).html().toLowerCase().indexOf(search) != -1) {
                                    $(this).show();
                                }
                                else {
                                    $(this).hide();
                                }
                            });
                        });

                        $("#destinationMobile").on("keyup", function() {
                            var search = $(this).val().toLowerCase();
                            $(".listPlace__item").each(function() {
                                if ($(this).html().toLowerCase().indexOf(search) != -1) {
                                    $(this).show();
                                }
                                else {
                                    $(this).hide();
                                }
                            });
                        });

                        // * click button suggestion flight return input *
                        $('.flightOrigin').on('click', '.btnFlight', function() {
                            let codeFlightOrigin =  $(this).attr("dataCode");
                            $('#origin').attr('dataCode', codeFlightOrigin);
                            $('.suggestDefault').removeClass('open')
                            let text = $(this).text();
                            $(".flightOrigin .form-control").val(text.trim());
                        })

                        $('.flightDestination').on('click', '.btnFlight', function() {
                            let codeFlightDestination =  $(this).attr("dataCode");
                            $('#destination').attr('dataCode', codeFlightDestination);
                            $('.suggestDefault').removeClass('open')
                            let text = $(this).text();
                            $(".flightDestination .form-control").val(text.trim());
                        })

                        let psg_category = [' người lớn', ' trẻ em<span class="d-block">2 - 12 tuổi', ' trẻ sơ sinh<span class="d-block">&lt; 2 tuổi'],
                            psg_arr = document.querySelectorAll('.passengerBox__item'),
                            psg_value = [adult = 1, child = 0, infant = 0];

                        for(let i = 0; i < psg_arr.length; i++) {
                            //cong
                            $(psg_arr[i].children[2]).on('click', function () {
                                $(psg_arr[i].children[0]).removeClass('vntDisabled')
                                psg_value[i] += 1
                                if (psg_value[0] + psg_value[1] + psg_value[2] >= 6) {
                                    $('.passengerBox__plus').addClass('vntDisabled');
                                }else if(psg_value[0] + psg_value[1] + psg_value[2] < 6){
                                    $('.passengerBox__plus').removeClass('vntDisabled');
                                }
                                psg_arr[i].children[1].innerHTML = ''
                                psg_arr[i].children[1].innerHTML = psg_value[i] + psg_category[i];
                                let result = `${psg_value[0]} người lớn, ${psg_value[1]} trẻ em, ${psg_value[2]} trẻ sơ sinh`;
                                $(".dropdown-toggle span").html('');
                                $(".dropdown-toggle span").html(result);
                            })
                            //tru
                            $(psg_arr[i].children[0]).on('click', function () {
                                $(psg_arr[i].children[2]).addClass('vntDisabled')
                                psg_value[i] -= 1
                                if (psg_value[0] + psg_value[1] + psg_value[2] == 1) {
                                    $('.passengerBox__minus').addClass('vntDisabled');
                                    $('.passengerBox__plus').removeClass('vntDisabled');
                                }else if(psg_value[0] + psg_value[1] + psg_value[2] < 6){
                                    $('.passengerBox__plus').removeClass('vntDisabled');
                                }
                                psg_arr[i].children[1].innerHTML = ''
                                psg_arr[i].children[1].innerHTML = psg_value[i] + psg_category[i];
                                let result = `${psg_value[0]} người lớn, ${psg_value[1]} trẻ em, ${psg_value[2]} trẻ sơ sinh`;
                                $(".dropdown-toggle span").html('');
                                $(".dropdown-toggle span").html(result);
                            })
                        }

                        // * load datepicker flight *
                        if($.fn.daterangepicker) {
                            $('input[name="date"]').daterangepicker({
                                "opens": "right",
                                "autoApply": true,
                                startDate: moment().add(1, 'days'),
                                endDate: moment().add(3, 'days'),
                                locale: {
                                    format: formatDate
                                },
                                minDate: moment()
                            },function (start, end) {
                                if(moment(start).format(formatDate) === moment(end).format(formatDate)) {
                                    $('input[name="date"]').data('daterangepicker').setEndDate(moment(start).add(1, 'days'));
                                }
                            });
                        }

                        //submit link flight
                        $('#btnSearchFlight').click(function(e) {
                            if ($("#origin, #destination").val()){
                                    if($('#origin').attr("dataCode") === "" || $('#destination').attr("dataCode") === ""){
                                        console.log("error")
                                    }
                                    else if(psg_value[0] < 1 || psg_value[1] < 0 || psg_value[2] < 0){
                                        e.preventDefault()
                                        let arrayDate = $('#datepickerFlight').val().split('-'),
                                            startDate = arrayDate[0],
                                            endDate = arrayDate[1],
                                            radioValue = $("input[name='flight']:checked").val();

                                        let params = "origin_code=" + $('#origin').attr("dataCode") +
                                            "&destination_code=" + $('#destination').attr("dataCode") +
                                            "&adult_count=" + 1 +
                                            "&child_count=" + 0 +
                                            "&infant_count=" + 0 +
                                            "&is_return=" + radioValue +
                                            "&start_date=" + moment(startDate, formatDate).format(formatDate1) +
                                            "&end_date=" + moment(endDate, formatDate).format(formatDate1);

                                        params = formatStringUrl(params)

                                        if(redirect_to === ''){
                                            if (redirect_type === "new_tab" ) {
                                                window.open("https://webview.vntrip.vn/tim-ve-may-bay?" + params);
                                            }else {
                                                window.location = "https://webview.vntrip.vn/tim-ve-may-bay?" + params;
                                            }
                                        }else {
                                            if (redirect_type === "new_tab" ) {
                                                window.open(redirect_to + "/webview_url=webview.vntrip.vn/tim-ve-may-bay?" + params);
                                            }else {
                                                window.location = redirect_to + "/webview_url=webview.vntrip.vn/tim-ve-may-bay?" + params;
                                            }
                                        }
                                    }
                                    else{
                                        e.preventDefault()
                                        let arrayDate = $('#datepickerFlight').val().split('-'),
                                            startDate = arrayDate[0],
                                            endDate = arrayDate[1],
                                            radioValue = $("input[name='flight']:checked").val();

                                        let params = "origin_code=" + $('#origin').attr("dataCode") +
                                            "&destination_code=" + $('#destination').attr("dataCode") +
                                            "&adult_count=" + psg_value[0] +
                                            "&child_count=" + psg_value[1] +
                                            "&infant_count=" + psg_value[2] +
                                            "&is_return=" + radioValue +
                                            "&start_date=" + moment(startDate, formatDate).format(formatDate1) +
                                            "&end_date=" + moment(endDate, formatDate).format(formatDate1);

                                        params = formatStringUrl(params)

                                        if(redirect_to === ''){
                                            if (redirect_type === "new_tab" ) {
                                                window.open("https://webview.vntrip.vn/tim-ve-may-bay?" + params);
                                            }else {
                                                window.location = "https://webview.vntrip.vn/tim-ve-may-bay?" + params;
                                            }
                                        }else {
                                            if (redirect_type === "new_tab" ) {
                                                window.open(redirect_to + "/webview_url=webview.vntrip.vn/tim-ve-may-bay?" + params);
                                            }else {
                                                window.location = redirect_to + "/webview_url=webview.vntrip.vn/tim-ve-may-bay?" + params;
                                            }
                                        }
                                    }
                            }
                            else {
                                $("#formValidateFlight").validate ({
                                    rules: {
                                        origin: "required",
                                        destination: "required"
                                    },
                                    messages: {
                                        origin: "Vui lòng nhập điểm đi",
                                        destination: "Vui lòng nhập điểm đến"
                                    }
                                })
                            }
                        });

                        //-------------add class--------------

                        $("#btnHotel").click(function () {
                            $('.vntSearch__hotel').addClass('open');
                            $('.vntSearch__flight').removeClass('open');

                            $('.vntSearch__tab li').removeClass('active');
                            $(this).parent('li').addClass('active');
                        });

                        $("#btnFlight").click(function () {
                            $('.vntSearch__hotel').removeClass('open');
                            $('.vntSearch__flight').addClass('open');

                            $('.vntSearch__tab li').removeClass('active');
                            $(this).parent('li').addClass('active');
                        });

                        if (screen.width < 768) {
                            $("#inputHotelDomestics, #origin, #destination").attr('readonly', true);
                        };

                        // vntSearch hotel
                        $("#inputHotelDomestics").click(function () {
                            $(this).parents('.placeInput').find('.suggestDefault').addClass('open');
                            $('body').addClass('noScroll');
                        });

                        $(".suggestDefault__close").click(function () {
                            $('.suggestDefault').removeClass('open');
                            $('body').removeClass('noScroll');
                        });

                        $(document).mouseup(function (e) {
                            var suggestDefault = $('.suggestDefault');
                            if (!suggestDefault.is(e.target) && suggestDefault.has(e.target).length === 0) {
                                $('.suggestDefault').removeClass('open');
                                $('body').removeClass('noScroll');
                            };
                        });

                        // vntSearch flight
                        $("#origin, #destination").click(function () {
                            $(this).parents('.placeInput').find('.suggestDefault').addClass('open');
                            $('body').addClass('noScroll');
                        });

                        $(document).mouseup(function (e) {
                            var suggestDefault = $('.suggestDefault');
                            if (!suggestDefault.is(e.target) && suggestDefault.has(e.target).length === 0) {
                                $('.suggestDefault').removeClass('open');
                                $('.flightDefault').removeClass('hidden');
                                $('.vntSearch__flight .suggestDefault .listPlace').addClass('hidden');
                            };
                        });

                        $("#origin, #destination, .suggestDefault__input input").on('input', function () {
                            $(this).parents('.placeInput').find('.flightDefault').addClass('hidden');
                            $(this).parents('.placeInput').find('.suggestDefault').find('.listPlace').removeClass('hidden');
                        });

                        $(".suggestDefault__close").click(function () {
                            $('.suggestDefault').removeClass('open');
                            $('body').removeClass('noScroll');
                        });

                        $(".passengerBox .headerPopup__close, .passengerBox__backdrop").click(function () {
                            $(this).parents('.passengerBox').find('.dropdown').removeClass('dropdown-open');
                        });

                        $(function(){
                            //Modal bootstrap3
                            +function ($) {
                                'use strict';
                                var Modal = function (element, options) {
                                    this.options             = options
                                    this.$body               = $(document.body)
                                    this.$element            = $(element)
                                    this.$dialog             = this.$element.find('.modal-dialog')
                                    this.$backdrop           = null
                                    this.isShown             = null
                                    this.originalBodyPad     = null
                                    this.scrollbarWidth      = 0
                                    this.ignoreBackdropClick = false

                                    if (this.options.remote) {
                                        this.$element
                                            .find('.modal-content')
                                            .load(this.options.remote, $.proxy(function () {
                                                this.$element.trigger('loaded.bs.modal')
                                            }, this))
                                    }
                                }

                                Modal.VERSION  = '3.3.7'

                                Modal.TRANSITION_DURATION = 300
                                Modal.BACKDROP_TRANSITION_DURATION = 150

                                Modal.DEFAULTS = {
                                    backdrop: true,
                                    keyboard: true,
                                    show: true
                                }

                                Modal.prototype.toggle = function (_relatedTarget) {
                                    return this.isShown ? this.hide() : this.show(_relatedTarget)
                                }

                                Modal.prototype.show = function (_relatedTarget) {
                                    var that = this
                                    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

                                    this.$element.trigger(e)

                                    if (this.isShown || e.isDefaultPrevented()) return

                                    this.isShown = true

                                    this.checkScrollbar()
                                    this.setScrollbar()
                                    this.$body.addClass('modal-open')

                                    this.escape()
                                    this.resize()

                                    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

                                    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                                        that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                                            if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
                                        })
                                    })

                                    this.backdrop(function () {
                                        var transition = $.support.transition && that.$element.hasClass('fade')

                                        if (!that.$element.parent().length) {
                                            that.$element.appendTo(that.$body) // don't move modals dom position
                                        }

                                        that.$element
                                            .show()
                                            .scrollTop(0)

                                        that.adjustDialog()

                                        if (transition) {
                                            that.$element[0].offsetWidth // force reflow
                                        }

                                        that.$element.addClass('in')

                                        that.enforceFocus()

                                        var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

                                        transition ?
                                            that.$dialog // wait for modal to slide in
                                                .one('bsTransitionEnd', function () {
                                                    that.$element.trigger('focus').trigger(e)
                                                })
                                                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                                            that.$element.trigger('focus').trigger(e)
                                    })
                                }

                                Modal.prototype.hide = function (e) {
                                    if (e) e.preventDefault()

                                    e = $.Event('hide.bs.modal')

                                    this.$element.trigger(e)

                                    if (!this.isShown || e.isDefaultPrevented()) return

                                    this.isShown = false

                                    this.escape()
                                    this.resize()

                                    $(document).off('focusin.bs.modal')

                                    this.$element
                                        .removeClass('in')
                                        .off('click.dismiss.bs.modal')
                                        .off('mouseup.dismiss.bs.modal')

                                    this.$dialog.off('mousedown.dismiss.bs.modal')

                                    $.support.transition && this.$element.hasClass('fade') ?
                                        this.$element
                                            .one('bsTransitionEnd', $.proxy(this.hideModal, this))
                                            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                                        this.hideModal()
                                }

                                Modal.prototype.enforceFocus = function () {
                                    $(document)
                                        .off('focusin.bs.modal') // guard against infinite focus loop
                                        .on('focusin.bs.modal', $.proxy(function (e) {
                                            if (document !== e.target &&
                                                this.$element[0] !== e.target &&
                                                !this.$element.has(e.target).length) {
                                                this.$element.trigger('focus')
                                            }
                                        }, this))
                                }

                                Modal.prototype.escape = function () {
                                    if (this.isShown && this.options.keyboard) {
                                        this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                                            e.which == 27 && this.hide()
                                        }, this))
                                    } else if (!this.isShown) {
                                        this.$element.off('keydown.dismiss.bs.modal')
                                    }
                                }

                                Modal.prototype.resize = function () {
                                    if (this.isShown) {
                                        $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
                                    } else {
                                        $(window).off('resize.bs.modal')
                                    }
                                }

                                Modal.prototype.hideModal = function () {
                                    var that = this
                                    this.$element.hide()
                                    this.backdrop(function () {
                                        that.$body.removeClass('modal-open')
                                        that.resetAdjustments()
                                        that.resetScrollbar()
                                        that.$element.trigger('hidden.bs.modal')
                                    })
                                }

                                Modal.prototype.removeBackdrop = function () {
                                    this.$backdrop && this.$backdrop.remove()
                                    this.$backdrop = null
                                }

                                Modal.prototype.backdrop = function (callback) {
                                    var that = this
                                    var animate = this.$element.hasClass('fade') ? 'fade' : ''

                                    if (this.isShown && this.options.backdrop) {
                                        var doAnimate = $.support.transition && animate

                                        this.$backdrop = $(document.createElement('div'))
                                            .addClass('modal-backdrop ' + animate)
                                            .appendTo(this.$body)

                                        this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                                            if (this.ignoreBackdropClick) {
                                                this.ignoreBackdropClick = false
                                                return
                                            }
                                            if (e.target !== e.currentTarget) return
                                            this.options.backdrop == 'static'
                                                ? this.$element[0].focus()
                                                : this.hide()
                                        }, this))

                                        if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                                        this.$backdrop.addClass('in')

                                        if (!callback) return

                                        doAnimate ?
                                            this.$backdrop
                                                .one('bsTransitionEnd', callback)
                                                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                                            callback()

                                    } else if (!this.isShown && this.$backdrop) {
                                        this.$backdrop.removeClass('in')

                                        var callbackRemove = function () {
                                            that.removeBackdrop()
                                            callback && callback()
                                        }
                                        $.support.transition && this.$element.hasClass('fade') ?
                                            this.$backdrop
                                                .one('bsTransitionEnd', callbackRemove)
                                                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                                            callbackRemove()

                                    } else if (callback) {
                                        callback()
                                    }
                                }

                                // these following methods are used to handle overflowing modals

                                Modal.prototype.handleUpdate = function () {
                                    this.adjustDialog()
                                }

                                Modal.prototype.adjustDialog = function () {
                                    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

                                    this.$element.css({
                                        paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
                                        paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
                                    })
                                }

                                Modal.prototype.resetAdjustments = function () {
                                    this.$element.css({
                                        paddingLeft: '',
                                        paddingRight: ''
                                    })
                                }

                                Modal.prototype.checkScrollbar = function () {
                                    var fullWindowWidth = window.innerWidth
                                    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                                        var documentElementRect = document.documentElement.getBoundingClientRect()
                                        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
                                    }
                                    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
                                    this.scrollbarWidth = this.measureScrollbar()
                                }

                                Modal.prototype.setScrollbar = function () {
                                    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
                                    this.originalBodyPad = document.body.style.paddingRight || ''
                                    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
                                }

                                Modal.prototype.resetScrollbar = function () {
                                    this.$body.css('padding-right', this.originalBodyPad)
                                }

                                Modal.prototype.measureScrollbar = function () { // thx walsh
                                    var scrollDiv = document.createElement('div')
                                    scrollDiv.className = 'modal-scrollbar-measure'
                                    this.$body.append(scrollDiv)
                                    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
                                    this.$body[0].removeChild(scrollDiv)
                                    return scrollbarWidth
                                }


                                // MODAL PLUGIN DEFINITION
                                // =======================

                                function Plugin(option, _relatedTarget) {
                                    return this.each(function () {
                                        var $this   = $(this)
                                        var data    = $this.data('bs.modal')
                                        var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

                                        if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
                                        if (typeof option == 'string') data[option](_relatedTarget)
                                        else if (options.show) data.show(_relatedTarget)
                                    })
                                }

                                var old = $.fn.modal

                                $.fn.modal             = Plugin
                                $.fn.modal.Constructor = Modal


                                // MODAL NO CONFLICT
                                // =================

                                $.fn.modal.noConflict = function () {
                                    $.fn.modal = old
                                    return this
                                }


                                // MODAL DATA-API
                                // ==============

                                $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
                                    var $this   = $(this)
                                    var href    = $this.attr('href')
                                    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
                                    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

                                    if ($this.is('a')) e.preventDefault()

                                    $target.one('show.bs.modal', function (showEvent) {
                                        if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
                                        $target.one('hidden.bs.modal', function () {
                                            $this.is(':visible') && $this.trigger('focus')
                                        })
                                    })
                                    Plugin.call($target, option, this)
                                })

                            }(jQuery);
                            +function ($) {
                                'use strict';
                                function transitionEnd() {
                                    var el = document.createElement('bootstrap')

                                    var transEndEventNames = {
                                        WebkitTransition : 'webkitTransitionEnd',
                                        MozTransition    : 'transitionend',
                                        OTransition      : 'oTransitionEnd otransitionend',
                                        transition       : 'transitionend'
                                    }

                                    for (var name in transEndEventNames) {
                                        if (el.style[name] !== undefined) {
                                            return { end: transEndEventNames[name] }
                                        }
                                    }

                                    return false // explicit for ie8 (  ._.)
                                }

                                // http://blog.alexmaccaw.com/css-transitions
                                $.fn.emulateTransitionEnd = function (duration) {
                                    var called = false
                                    var $el = this
                                    $(this).one('bsTransitionEnd', function () { called = true })
                                    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
                                    setTimeout(callback, duration)
                                    return this
                                }

                                $(function () {
                                    $.support.transition = transitionEnd()

                                    if (!$.support.transition) return

                                    $.event.special.bsTransitionEnd = {
                                        bindType: $.support.transition.end,
                                        delegateType: $.support.transition.end,
                                        handle: function (e) {
                                            if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                                        }
                                    }
                                })

                            }(jQuery);
                            //End Modal bootstrap3

                            //Dropdown
                            +function ($) {
                                'use strict';

                                var backdrop = '.dropdown-backdrop';
                                var toggle   = '[data-toggle="dropdown"]';
                                var Dropdown = function (element) {
                                    $(element).on('click.bs.dropdown', this.toggle)
                                };

                                Dropdown.VERSION = '3.3.7';

                                function getParent($this) {
                                    var selector = $this.attr('data-target');

                                    if (!selector) {
                                        selector = $this.attr('href');
                                        selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
                                    }

                                    var $parent = selector && $(selector);

                                    return $parent && $parent.length ? $parent : $this.parent()
                                }

                                function clearMenus(e) {
                                    if (e && e.which === 3) return;
                                    $(backdrop).remove();
                                    $(toggle).each(function () {
                                        var $this         = $(this);
                                        var $parent       = getParent($this);
                                        var relatedTarget = { relatedTarget: this };

                                        if (!$parent.hasClass('dropdown-open')) return;

                                        if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

                                        $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

                                        if (e.isDefaultPrevented()) return;

                                        $this.attr('aria-expanded', 'false');
                                        $parent.removeClass('dropdown-open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
                                    })
                                }

                                Dropdown.prototype.toggle = function (e) {
                                    var $this = $(this);

                                    if ($this.is('.disabled, :disabled')) return;

                                    var $parent  = getParent($this);
                                    var isActive = $parent.hasClass('dropdown-open');

                                    clearMenus();

                                    if (!isActive) {
                                        if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                                            $(document.createElement('div'))
                                                .addClass('dropdown-backdrop')
                                                .insertAfter($(this))
                                                .on('click', clearMenus)
                                        }

                                        var relatedTarget = { relatedTarget: this };
                                        $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

                                        if (e.isDefaultPrevented()) return;

                                        $this
                                            .trigger('focus')
                                            .attr('aria-expanded', 'true');

                                        $parent
                                            .toggleClass('dropdown-open')
                                            .trigger($.Event('shown.bs.dropdown', relatedTarget))
                                    }

                                    return false
                                };

                                Dropdown.prototype.keydown = function (e) {
                                    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

                                    var $this = $(this);

                                    e.preventDefault();
                                    e.stopPropagation();

                                    if ($this.is('.disabled, :disabled')) return;

                                    var $parent  = getParent($this);
                                    var isActive = $parent.hasClass('dropdown-open');

                                    if (!isActive && e.which != 27 || isActive && e.which == 27) {
                                        if (e.which == 27) $parent.find(toggle).trigger('focus');
                                        return $this.trigger('click')
                                    }

                                    var desc = ' li:not(.disabled):visible a';
                                    var $items = $parent.find('.dropdown-menu' + desc);

                                    if (!$items.length) return;

                                    var index = $items.index(e.target);

                                    if (e.which == 38 && index > 0)                 index--         // up
                                    if (e.which == 40 && index < $items.length - 1) index++         // down
                                    if (!~index)                                    index = 0

                                    $items.eq(index).trigger('focus')
                                };

                                function Plugin(option) {
                                    return this.each(function () {
                                        var $this = $(this);
                                        var data  = $this.data('bs.dropdown');

                                        if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)));
                                        if (typeof option == 'string') data[option].call($this)
                                    })
                                }

                                var old = $.fn.dropdown;

                                $.fn.dropdown             = Plugin;
                                $.fn.dropdown.Constructor = Dropdown;

                                $.fn.dropdown.noConflict = function () {
                                    $.fn.dropdown = old;
                                    return this
                                };

                                $(document)
                                    .on('click.bs.dropdown.data-api', clearMenus)
                                    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
                                    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
                                    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
                                    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

                            }(jQuery);

                            // End Dropdown

                            // click not to hidden dropdown-menu
                            $(".dropdown-menu").on('click touchstart', function (event) {
                                event.stopPropagation();
                            });

                        });

                    }, 500);
                })
            });
        }
    });
})()