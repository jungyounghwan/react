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
            <!-- ������ ���� -->
            <div id="contents" class="sh_co">
                    <div id="title">
                        <h1><img src="/imgs/title/sh_co_tit.gif" alt="���ֱ���" /></h1>
                        <div class="location"><a href="/open_content/main/main.php"><img src="/imgs/common/icon_home.gif" alt="home" /></a> &gt; <a href="/open_content/ir/shareholder_composition.php">IR</a> &gt; <a href="/open_content/ir/shareholder_composition.php">������豸��</a> &gt; <strong>���ֱ���</strong></div>
                    </div>
                    <!-- ���� �� �Խ��� ��ﰡ�� �� -->
                    <div class="board_box">
                        <h3><img src="/imgs/ir/sh_co_tit.gif" alt="(��)�����HR�� �ٿ��� �� ���� ���� ����� �پ��� ���ֵ�� �����Ǿ� �ֽ��ϴ�." /></h3>
                        <h4 class="c01"><img src="/imgs/ir/sh_co_part01.gif" alt="�����ֽļ� 6,369,930 - 2011�� 10�� 17�� ����" /></h4>
                        <ul>
                            <li class="c02"><img src="/imgs/ir/sh_co_part02.gif" alt="(��)�ٿ��� 45.20%" /></li>
                            <li class="c03"><img src="/imgs/ir/sh_co_part03.gif" alt="(��)�̸Ӵ� 10.99%" /></li>
                            <li class="c04"><img src="/imgs/ir/sh_co_part04.gif" alt="(��)�ٿ쵥��Ÿ 9.88%" /></li>
                            <li class="c05"><img src="/imgs/ir/sh_co_part05.gif" alt="(��)��ť����ũ 6.10%" /></li>
                            <li class="c06"><img src="/imgs/ir/sh_co_part06.gif" alt="Ű������(��) 4.15%" /></li>
                            <li class="c07"><img src="/imgs/ir/sh_co_part07.gif" alt="Ư��������(����) 11.42%" /></li>
                            <li class="c08"><img src="/imgs/ir/sh_co_part08.gif" alt="��Ÿ �Ҿ����� 12.27%" /></li>
                        </ul>				
<? /*
                        <h3><img src="/imgs/ir/sh_co_txt.gif" alt="�߻������ �ٿ��� �� ���� ���� ����� �پ��� ���ֵ�� �����Ǿ� �ֽ��ϴ�." /></h3>                       
                        <!-- �׷��� ���� -->
                        <div id="graph_zone">
                            <p class="total"><img src="/imgs/ir/sh_co_num.gif" alt="�����ֽ� ��(2011�� 6�� 30�� ����) : 6,369,930" /></p>
                            <div class="graph">
                            	<!--
                                <img src="/imgs/ir/graph_ex.gif" alt="(��)�ٿ���:45.20% / (��)�ٿ쵥��Ÿ:9.88% /(��)Ư��������(����):12.67% /(��)��ť����ũ:6.10% /��Ÿ �Ҿ�����:11.01% /Ű������(��):4.15% /(��)�̸Ӵ�:10.99% /" />
                                -->
								<div id="pie1" style="margin-top:0px; margin-left:0px; width:198px; height:198px;color:#eeeeee;font-weight:bold;"></div>
								<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="/common/js/dist/excanvas.js"></script><![endif]-->
								<!-- BEGIN: load jqplot -->
								<script language="javascript" type="text/javascript" src="/common/js/dist/jquery.jqplot.min.js"></script>
								<script language="javascript" type="text/javascript" src="/common/js/dist/plugins/jqplot.donutRenderer.js"></script>
								<!-- END: load jqplot -->
								<script class="code" type="text/javascript">$(document).ready(function(){
									//plot1 = $.jqplot('pie1', [[['(��)�ٿ���',45.20],['(��)Ư��������(����)',12.67],['��Ÿ �Ҿ�����',11.01],['(��)�̸Ӵ�',10.99],['(��)�ٿ쵥��Ÿ',9.88],['(��)��ť����ũ',6.10],['Ű������(��)',4.15]]], {
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
												dataLabelFormatString: '%.2f%%', //dataLbel�� ����
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

					<!-- �ֽļ�����Ȳ -->
                    <h3 class="stit"><img src="/imgs/ir/sh_co_stit02.gif" alt="�ֽļ�����Ȳ" /> <span><?=date("Y�� m�� d��",strtotime($stock_date))?> ����</span></h3>
                    <table class="content_list" summary="�ֽļ�����Ȳ�� ����, ������, �켱��, Total ������ �����帳�ϴ�.">
                    <caption><span>�ֽļ�����Ȳ ����Ʈ</span></caption>
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
                            <th rowspan="2" scope="col">����(���θ�)</th>
                            <th colspan="2" >������</th>
                            <th colspan="2" >�켱��</th>
                            <th colspan="2" scope="col">Total</th>
                        </tr>
                        <tr>
                            <td scope="col">�ֽ���</td>
                            <td scope="col">������</td>
                            <td scope="col">�ֽ���</td>
                            <td scope="col">������</td>
                            <td scope="col">�ֽ���</td>
                            <td scope="col">������</td>
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
                    
                    
                    <!-- //���� �� �Խ��� ��ﰡ�� �� -->
            </div> 
            <!-- //������ ���� -->
<? include "../../inc/ir_navi.php"; ?>
<? include "../../inc/footer_inc.php"; ?>
