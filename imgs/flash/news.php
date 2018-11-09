<?
header("Content-type: text/xml"); 
echo '<?xml version="1.0" encoding="euc-kr"?>'; 
?>
<main>

	<newSet>
<? 
	 include("../../inc/db.php");
	
	$str_press=fn_print('B2');
	$str_nanum=fn_print('nanum');
	$str_news=fn_print('B1');
	$str_awards=fn_print('B4');
	
	echo $str_press;
	echo $str_news;
	echo $str_awards;
?>
	</newSet>

</main>

<?
function fn_print($code) {
	if($code=="nanum") $sql="select * from board where bid='nanum' order by idx desc limit 4";
	else $sql="select * from amboard_basic where code='$code' and secret!='1' order by wdate desc,no desc limit 4";
	
	 $result=mysql_query($sql);
	 while($row=mysql_fetch_array($result)) {
	 	if($code!="nanum") {
		 	$subject=$row[title];
		 	if($code=="B1") $url="/open_content/pr/saramin_news.php";
		 	else if($code=="B2") $url="/open_content/pr/press_release.php";
		 	else if($code=="B4") $url="/open_content/pr/saramin_awards.php";
		 	$url.="?group=basic&code=".$code."&abmode=view&no=".$row[no];
		 	$date=date("Y.m.d",strtotime($row[wdate]));
		 	$dt_insert=$row[wdate];
		} else {
		 	$subject=$row[subject];
		 	$url="/open_content/hr/nanum.php?idx=".$row[idx];
		 	$date=date("Y.m.d",strtotime($row[dt_insert]));
		 	$dt_insert=$row[dt_insert];
		}
		
		//$now_strtotime = strtotime(date("Y-m-d H:i:s"));
		//$img_new = ($now_strtotime-strtotime($dt_insert)<(24*60*60*7))?' <img src="/board/imgs/new.png" alt="new"/>':'';
		//$subject=cutstring($subject,250).$img_new;	
	 	$str_print.="
			<news>
				<newsTitle><![CDATA[".$subject."]]></newsTitle>
				<newsUrl><![CDATA[".$url."]]></newsUrl>
				<newsDate><![CDATA[".$date."]]></newsDate>
			</news>";
	}
	
	$cnt=mysql_num_rows($result);
	if($cnt<4) {
		for($i=0;$i<(4-$cnt);$i++) {
			$str_print.="
			<news>
				<newsTitle><![CDATA[]]></newsTitle>
				<newsUrl><![CDATA[]]></newsUrl>
				<newsDate><![CDATA[]]></newsDate>
			</news>";
		}
	}
	return $str_print;
}

function cutstring($subject,$cutwidth) {

	//제목이 일정한 글자 넓이를 넘었을때..
	$len = strlen($subject);
	$STRCTRL = new StringSize();
	$subject = $STRCTRL->cut($subject,$cutwidth);
	$len2 = strlen($subject);
	if($len != $len2) {
		$subject = $subject."...";
	}
	return $subject;
}

?>

<?

// 실제 넓이를 이용하여 글자 자르기
class StringSize{
	/* 페이지 기본 폰트 : 굴림체, 12px */
	
	var $SPECIAL = 6;	/* ASCII 문자중 특수문자(ASCII 코드 1~32) */
	var $MCHAR = 12;	/* 한글 문자 */
	var $BASE = 32;		/* ASCII 코드 하한값 */
	var $END =  127;	/* ASCII 코드 상한값 */
	var $ASCII = Array(
			4,4,4,6,6,10,8,4,5,5,6,6,4,6,4,6,6,6,6,6,6,6,6,6,6,6,
			4,4,8,6,8,6,12,8,8,9,8,8,7,9,8,3,6,8,7,11,9,9,8,9,8,8,
			8,8,8,10,8,8,8,6,11,6,6,6,4,7,7,7,7,7,3,7,7,3,3,6,3,11,
			7,7,7,7,4,7,3,7,6,10,7,7,7,6,6,6,9,6
	);
	function cut($str,$width){
		$str = strip_tags($str);
		$str = preg_replace("/ {2,}/"," ",$str);
		$str = preg_replace("/^ | $/","",$str);
		$len = strlen($str);
		if ($width < $len * $this->MCHAR){
			for($i=0;$i<$len;$i=$i+$charLen){
				$code = ord($str[$i]);
				if ($code <= $this->END){
					$charSize 	= $this->getAscSize($code);
					$charLen	= 1;
				}
				else{
					$charSize	= $this->MCHAR;
					$charLen 	= 2;
				}
				if ($charSize < $width)	$width -= $charSize;
				else			break;
			}
			return substr($str,0,$i);
		}
		return $str;
	}
	function getAscSize($code){
		if ($code < $this->BASE)	return $this->SPECIAL;
		else{
			$idx = $code - $this->BASE;
			return $this->ASCII[$idx];
		}
	}
}

/*
	$STRCTRL = new StringSize();
	$sample1 = "        가a나b다c             라d마1라2           ";
	
	$text1 = $STRCTRL->cut($sample1,100);
*/


?>