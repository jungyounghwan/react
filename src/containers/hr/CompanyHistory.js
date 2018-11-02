import React from 'react';
import Tab from '../../components/Tab';

class CompanyHistory extends React.Component {

    render(){
        const tabList = {
            no: 0,
            type : 'defalt',
            name : ['연혁', '수상내역']
        };
        return (
            <div className={"hr_companyhistory"}>
                <div className={'area_tab tabArea'+tabList.no}>
                    <Tab {...tabList} />
                    <div className="tab_cont">
                        <ul className={"history_list"}>
                            <li>
                                <p className={"date_y"}>2018</p>
                                <dl>
                                    <dt>09</dt>
                                    <dd>
                                        <ul>
                                            <li>PC 웹사이트 메인 개편</li>
                                            <li>사람인 BI 리뉴얼</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>2018 올해의 브랜드 대상 7년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>2018 국가브랜드대상 7년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>김용환 대표이사 선임</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2017</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>2017 웹어워드·스마트앱어워드 3개 부문 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>한국소비자원 '취업정보 사이트 서비스 만족도' 부분 1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>한국대학신문대상 취업사이트부문 5년 연속 1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>09</dt>
                                    <dd>
                                        <ul>
                                            <li>2017 올해의 브랜드 대상 6년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>08</dt>
                                    <dd>
                                        <ul>
                                            <li>모바일 브랜드 앱 개편</li>
                                            <li>공채의 명가 개편</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>2017 한국서비스품질지수(KS-SQI)1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>모바일 어워드 코리아 2017 대상 수상</li>
                                            <li>2017 국가브랜드대상 6년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>2017 대한민국 퍼스트브랜드 대상 6년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2016</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>웹어워드·스마트앱어워드 3개 부문 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>앱 어워드 코리아 2016 올해의 앱 2년 연속 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>한국대학신문대상 취업사이트부문 4년 연속 1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>2016 올해의 브랜드 대상 5년 연속 수상</li>
                                            <li>2016 한국서비스품질지수(KS-SQI)1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>2016 국가브랜드대상 5년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>2016 대한민국 퍼스트브랜드 대상 5년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2015</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>재능마켓 오투잡 합병</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>2015 대한민국 세종대왕 나눔 봉사 大賞 대상, 안전행정위원장상</li>
                                            <li>앱 어워드 코리아 2015 올해의 앱 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>한국대학신문대상 취업사이트부문 3년 연속 1위</li>
                                            <li>2015 대한민국 올해의 브랜드 대상 4년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>06</dt>
                                    <dd>
                                        <ul>
                                            <li>2015 한국서비스품질지수(KS-SQI)1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>2015 국가브랜드 대상 4년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>2015 행복더함 사회공헌대상 4년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>2015 대한민국 퍼스트브랜드 대상 4년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2014</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 웹어워드코리아-스마트앱어워드 대상</li>
                                            <li>'2014년 일자리창출지원 국무총리상' 수상</li>
                                            <li>2014 대한민국 세종대왕 나눔 봉사 大賞 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>알림센터 런칭</li>
                                            <li>년간 입사지원수 2천만 돌파</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>업계 최초 원클릭 결제 도입</li>
                                            <li>즐거운 직장, 행복한 기업 인증</li>
                                            <li>2014 소비자의 선택 4년 연속 대상</li>
                                            <li>한국대학신문대상 취업사이트부문 2년 연속 1위</li>
                                            <li>2014 올해의 브랜드 대상 3년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>06</dt>
                                    <dd>
                                        <ul>
                                            <li>2014 한국서비스품질지수(KS-SQI) 1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>05</dt>
                                    <dd>
                                        <ul>
                                            <li>코스닥상장 2주년 기념 대학생 장학금 수여</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>2014 국가브랜드대상 3년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>2014 행복더함 사회공헌대상 3년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>02</dt>
                                    <dd>
                                        <ul>
                                            <li>모바일 취업스터디 App 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>구인구직 매칭연구소 설립</li>
                                            <li>2014 대한민국 퍼스트브랜드대상 3년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2013</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 히든스타 런칭</li>
                                            <li>2013 웹어워드 코리아 3년 연속 최우수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 브랜드 App 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>모바일 버티컬 App 4종 런칭</li>
                                            <li>2013 소비자의 선택 3년 연속 취업포털 대상</li>
                                            <li>한국대학신문대상 취업사이트부문 1위</li>
                                            <li>2013 올해의 브랜드 대상 2년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>08</dt>
                                    <dd>
                                        <ul>
                                            <li>모바일 버티컬 App 9종 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>모바일 권역 App 9종 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>05</dt>
                                    <dd>
                                        <ul>
                                            <li>Fun한 취업 동영상 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>2013 국가브랜드대상 2년 연속 1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>2013 행복더함 사회공헌대상 고용노동부 장관상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>2013 대한민국 퍼스트브랜드 대상 2년 연속 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2012</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>2012 웹어워드 코리아 2년 연속 최우수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>2012 소비자의 선택 2년 연속 취업전문포털 대상</li>
                                            <li>한국서비스품질지수(KS-SQI) 5년 연속 1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>09</dt>
                                    <dd>
                                        <ul>
                                            <li>2012 올해의 브랜드 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>08</dt>
                                    <dd>
                                        <ul>
                                            <li>전문가 인터뷰 '당신의 멘토를 소개합니다.' 런칭</li>
                                            <li>선배 인터뷰 '선배통' 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>05</dt>
                                    <dd>
                                        <ul>
                                            <li>한국의 가장 사랑받는 브랜드 대상 2년 연속 1위</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>2012 국가브랜드대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>판도라매칭 서비스 런칭</li>
                                            <li>2012 행복더함 사회공헌대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>02</dt>
                                    <dd>
                                        <ul>
                                            <li>아바타서치 서비스 런칭</li>
                                            <li>사람인HR 코스닥 상장</li>
                                            <li>2012 대한민국 퍼스트브랜드 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>2011 웹어워드코리아 최우수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2011</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>'스마트앱어워드 2011' 최우수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>한국서비스품질지수(KS-SQI) 4년 연속 1위</li>
                                            <li>2011 국민사랑 고객감동브랜드 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>2011 소비자의 선택 취업전문포털 대상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>09</dt>
                                    <dd>
                                        <ul>
                                            <li>'공채의 명가' 모바일 어플리케이션 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>"당신의 꿈에 지원합니다" 캠페인 오픈</li>
                                            <li>사람인-알바인 통합 회원 시스템 오픈</li>
                                            <li>사람인HR ‘2011 대한민국 윤리경영대상’ 대상 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>06</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 ‘2011 한국의 가장 사랑받는 브랜드 대상’ 취업포털부문 대상 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>05</dt>
                                    <dd>
                                        <ul>
                                            <li>자본금 유상증자 (31.36억->31.85억)</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>경기청년뉴딜 대학맞춤형사업 위·수탁 협약 체결</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>㈜사람인HR ‘올해의 일하기 좋은 기업(잡월드 베스트600기업)’ 선정</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2010</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>㈜사람인HR 이정근 대표 ‘2010년 일자리창출 대통령 표창’ 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>자본금 유상증자 (30억->31.36억)</li>
                                            <li>사람인 ‘2010 웹어워드코리아 대상’ 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 ‘한국서비스품질지수’ 3년 연속 1위 선정</li>
                                            <li>㈜사람인HR '근로자파견 우수기업' 선정</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>08</dt>
                                    <dd>
                                        <ul>
                                            <li>재외국민&외국인등록증 없는 재한 외국인 실명인증 도입</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>모바일 전용 사람인 (http://m.saramin.co.kr) 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>05</dt>
                                    <dd>
                                        <ul>
                                            <li>자본금 유상증자 (26.5억->30억)</li>
                                            <li>사람인 ‘정보보호 안전진단 필증’ 획득</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>사무실 확장 및 본점 소재지 변경<br />(서울시 구로구 구로동 187-10 코오롱싸이언스밸리 1차 201호)</li>
                                            <li>기업 본인 확인제 시행 (실명/아이핀 인증)</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>02</dt>
                                    <dd>
                                        <ul>
                                            <li>“스터디사람인” (http://www.studysaramin.com) 사이트 런칭</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2009</p>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 ‘2009 웹어워드코리아’ 취업정보분야 최우수상 수상</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 ‘한국표준 서비스품질지수(KS-SQI)’ 구인구직분야 1위 선정(2년 연속)</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>개인 본인 확인제 시행 (실명/아이핀 인증)</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2008</p>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인HR 부설연구소 설립</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>09</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 ‘한국표준 서비스품질지수(KS-SQI)’ 구인구직분야 1위 선정</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>06</dt>
                                    <dd>
                                        <ul>
                                            <li>(주)지앤지피플 법인명 변경: (주)사람인HR (www.saraminhr.co.kr)</li>
                                            <li>스카우트코리아 브랜드명 변경: 사람인서치 (www.saraminsearch.co.kr)</li>
                                            <li>휴먼아웃소싱 브랜드명 변경: 사람인스탭 (www.saraminstaff.co.kr)</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>02</dt>
                                    <dd>
                                        <ul>
                                            <li>납입 자본금 증자 (12억->26.5억)</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2007</p>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>중부지사 설립</li>
                                            <li>"한국인재배출센터" 출범</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>취업교육, 기업교육 "에듀사람인" (http://edusaramin.co.kr) 오픈</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>영남사업본부 설립</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2006</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 CI 변경</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>08</dt>
                                    <dd>
                                        <ul>
                                            <li>납입 자본금 증자 (5억->12억)</li>
                                            <li>한국신용평가정보와 제휴</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>(주)에듀스와 전략적 제휴</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>04</dt>
                                    <dd>
                                        <ul>
                                            <li>중앙고용정보원과 정보교류 협약 체결</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2005</p>
                                <dl>
                                    <dt>11</dt>
                                    <dd>
                                        <ul>
                                            <li>(주)지앤지피플 사옥 이전</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 ‘개인정보보호 우수사이트’ 선정</li>
                                            <li>㈜지앤지피플로 법인명 전환 (http://gngpeople.co.kr)</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2004</p>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>아웃소싱 전문 사이트 “휴먼아웃소싱” 오픈</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>09</dt>
                                    <dd>
                                        <ul>
                                            <li>사람인 아르바이트, 알바세상 완전 무료 전환</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>08</dt>
                                    <dd>
                                        <ul>
                                            <li>대학생을 위한 취업전산망 “대학인” (http://univin.co.kr) 오픈</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>14개 전문채용사이트와 제휴</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>01</dt>
                                    <dd>
                                        <ul>
                                            <li>건설전문 구인구직 사이트 “기술잡” (http://kisuljob.co.kr) 오픈</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2003</p>
                                <dl>
                                    <dt>12</dt>
                                    <dd>
                                        <ul>
                                            <li>“사람인” 전면 개편 오픈</li>
                                            <li>전문 취업 교육센터 "사람인 EDU" 오픈</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>10</dt>
                                    <dd>
                                        <ul>
                                            <li>온/오프라인 통합 고급 헤드헌팅 '스카우트</li>
                                            <li>코리아' (http://scoutkorea.co.kr) 오픈</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <p className={"date_y"}>2002</p>
                                <dl>
                                    <dt>07</dt>
                                    <dd>
                                        <ul>
                                            <li>'백만인취업운동본부' (http://100manin.or.kr) 출범</li>
                                            <li>http://saramin.co.kr 직업정보제공사업신고 (신고번호: 서울 관악 제2002-5호)</li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>03</dt>
                                    <dd>
                                        <ul>
                                            <li>온라인 취업 포털 "사람인" (http://saramin.co.kr) 오픈</li>
                                            <li>아르바이트 전문 포털 "알바세상" (http://albasesang.co.kr) 오픈</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <div className="tab_cont">
                        연혁 tab_cont
                    </div>
                </div>

            </div>
        )
    }
}

export default CompanyHistory;