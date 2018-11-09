<? $menu="3-1-1"; include "../../inc/top_inc.php"; ?>
<?
	include("../../inc/db.php");
	$result=mysql_query("select * from t_shareholder order by sortkey",$connect_db) or die("ERROR");
	if(!mysql_num_rows($result)) echo "<tr><td colspan='8' align='center'>Empty</td></tr>";
	while($row=mysql_fetch_array($result)) {
		if(strtotime($stock_date)>date("1970-01-01"))	$stock_date=($sock_date>$row[stock_date])?$row[stock_date]:$stock_date;
		else $stock_date=$row[stock_date];
		$total_common_num+=(int)$row[common_num];
		$total_common_per+=(float)$row[common_per];
		$total_preferred_num+=(int)$row[preferred_num];
		$total_preferred_per+=(float)$row[preferred_per];
		$row_total_num=(int)$row[common_num]+(int)$row[preferred_num];
		$row_total_per=(float)$row[common_per]+(float)$row[preferred_per];
		$all_total_num+=$row_total_num;
		$all_total_per+=$row_total_per;
		
		$str_row.='
		    <tr>
		        <td class="first">'.$row[name].'</td>
		        <td class="t_ju">'.number_format($row[common_num]).'</td>
		        <td>'.number_format($row[common_per],2).'%</td>
		        <td class="t_ju">'.number_format($row[preferred_num]).'</td>
		        <td>'.number_format($row[preferred_per],2).'%</td>
		        <td class="t_ju">'.number_format($row_total_num).'</td>
		        <td>'.number_format($row_total_per,2).'%</td>';
		$pie_data.="['".$row[name]."',".number_format($row_total_per,2)."],";
	}
	$pie_data=substr($pie_data,0,strlen($pie_data)-1);
?>            
            <!-- 컨텐츠 영역 -->
            <div id="contents" class="sh_co">
                    <div id="title">
                        <h1><img src="/imgs/title/sh_co_tit.gif" alt="주주구성" /></h1>
                        <div class="location"><a href="/open_content/main/main.php"><img src="/imgs/common/icon_home.gif" alt="home" /></a> &gt; <a href="/open_content/ir/shareholder_composition.php">IR</a> &gt; <a href="/open_content/ir/shareholder_composition.php">기업지배구조</a> &gt; <strong>주주구성</strong></div>
                    </div>
                    <!-- 내용 및 게시판 들억가는 곳 -->
                    <div class="board_box">
                        <h3><img src="/imgs/ir/sh_co_tit.gif" alt="(주)사람인HR은 다우기술 외 국내 여러 기관의 다양한 주주들로 구성되어 있습니다." /></h3>
                        <h4 class="c01"><img src="/imgs/ir/sh_co_part01.gif" alt="발행주식수 6,369,930 - 2011년 10월 17일 기준" /></h4>
                        <ul>
                            <li class="c02"><img src="/imgs/ir/sh_co_part02.gif" alt="(주)다우기술 45.20%" /></li>
                            <li class="c03"><img src="/imgs/ir/sh_co_part03.gif" alt="(주)이머니 10.99%" /></li>
                            <li class="c04"><img src="/imgs/ir/sh_co_part04.gif" alt="(주)다우데이타 9.88%" /></li>
                            <li class="c05"><img src="/imgs/ir/sh_co_part05.gif" alt="(주)인큐브테크 6.10%" /></li>
                            <li class="c06"><img src="/imgs/ir/sh_co_part06.gif" alt="키움증권(주) 4.15%" /></li>
                            <li class="c07"><img src="/imgs/ir/sh_co_part07.gif" alt="특수관계인(개인) 11.42%" /></li>
                            <li class="c08"><img src="/imgs/ir/sh_co_part08.gif" alt="기타 소액주주 12.27%" /></li>
                        </ul>				
<? /*
                        <h3><img src="/imgs/ir/sh_co_txt.gif" alt="㈜사람인은 다우기술 외 국내 여러 기관의 다양한 주주들로 구성되어 있습니다." /></h3>                       
                        <!-- 그래프 영역 -->
                        <div id="graph_zone">
                            <p class="total"><img src="/imgs/ir/sh_co_num.gif" alt="발행주식 수(2011년 6월 30일 기준) : 6,369,930" /></p>
                            <div class="graph">
                            	<!--
                                <img src="/imgs/ir/graph_ex.gif" alt="(주)다우기술:45.20% / (주)다우데이타:9.88% /(주)특수관계인(개인):12.67% /(주)인큐브테크:6.10% /기타 소액주주:11.01% /키움증권(주):4.15% /(주)이머니:10.99% /" />
                                -->
								<div id="pie1" style="margin-top:0px; margin-left:0px; width:198px; height:198px;color:#eeeeee;font-weight:bold;"></div>
								<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="/common/js/dist/excanvas.js"></script><![endif]-->
								<!-- BEGIN: load jqplot -->
								<script language="javascript" type="text/javascript" src="/common/js/dist/jquery.jqplot.min.js"></script>
								<script language="javascript" type="text/javascript" src="/common/js/dist/plugins/jqplot.donutRenderer.js"></script>
								<!-- END: load jqplot -->
								<script class="code" type="text/javascript">$(document).ready(function(){
									//plot1 = $.jqplot('pie1', [[['(주)다우기술',45.20],['(주)특수관계인(개인)',12.67],['기타 소액주주',11.01],['(주)이머니',10.99],['(주)다우데이타',9.88],['(주)인큐브테크',6.10],['키움증권(주)',4.15]]], {
									plot1 = $.jqplot('pie1', [[ <?=$pie_data?> ]], {
										seriesColors: [ "#5F96C9","#CCDCE5","#B9DCD6","#9B9ED5","#cBd6dC","#8090C3","#BCCAD9"], 
										gridPadding: {top:0, bottom:0, left:0, right:0},
										grid: {
											drawBorder: false, 
											drawGridlines: false,
											background: '#ffffff',
											shadow:false
										},
										seriesDefaults:{
											renderer:$.jqplot.DonutRenderer, //$.jqplot.PieRenderer, 
											trendline:{show:false}, 
											rendererOptions: { 
												padding: 8, 
												showDataLabels: true, 
												dataLabels: 'value', //'label or value
												dataLabelFormatString: '%.2f%%', //dataLbel값 주의
												dataLabelPositionFactor: 0.5,
												innerDiameter: 45,
												startAngle: 120, 
												sliceMargin: 0,
												showMarker: true
											}
										},
										legend:{show:false}
								    });
								});</script>
                            </div>
                        </div>
*/ ?>					
                    </div>

					<!-- 주식소유현황 -->
                    <h3 class="stit"><img src="/imgs/ir/sh_co_stit02.gif" alt="주식소유현황" /> <span><?=date("Y년 m월 d일",strtotime($stock_date))?> 현재</span></h3>
                    <table class="content_list" summary="주식소유현황을 성명, 보통주, 우선주, Total 순으로 보여드립니다.">
                    <caption><span>주식소유현황 리스트</span></caption>
                    <colgroup>
                    <col class="name" />
                    <col class="ju_num"/>
                    <col class="ji_num"/>
                    <col class="ju_num"/>
                    <col class="ji_num"/>
                    <col class="ju_num"/>
                    <col class="ji_num"/>
                    </colgroup>                  
                    <thead>
                        <tr>
                            <th rowspan="2" scope="col">성명(법인명)</th>
                            <th colspan="2" >보통주</th>
                            <th colspan="2" >우선주</th>
                            <th colspan="2" scope="col">Total</th>
                        </tr>
                        <tr>
                            <td scope="col">주식주</td>
                            <td scope="col">지분율</td>
                            <td scope="col">주식주</td>
                            <td scope="col">지분율</td>
                            <td scope="col">주식주</td>
                            <td scope="col">지분율</td>
                        </tr>
                    </thead>                    
                    <tbody>
                    	<?=$str_row?>
						<tr>
                            <td class="total">Total</td>
                            <td class="t_ju"><?=number_format($total_common_num)?></td>
                            <td><?=number_format($total_common_per)?>.00%</td>
                            <td class="t_ju"><?=number_format($total_preferred_num)?></td>
                            <td><?=number_format($total_preferred_per,2)?>%</td>
                            <td class="t_ju"><?=number_format($all_total_num)?></td>
                            <td class="last"><?=number_format($all_total_per)?>.00%</td>
                        </tr> 
                    </tbody>
                    </table>
                    
                    
                    <!-- //내용 및 게시판 들억가는 곳 -->
            </div> 
            <!-- //컨텐츠 영역 -->
<? include "../../inc/ir_navi.php"; ?>
<? include "../../inc/footer_inc.php"; ?>
