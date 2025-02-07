<?php
function drawBarCode($code) {
    header('Content-Type: image/png');

    $width = 600;
    $height = 100;
    $image = imagecreate($width, $height);

    $white = imagecolorallocate($image, 255, 255, 255);
    $black = imagecolorallocate($image, 0, 0, 0);

    imagefilledrectangle($image, 0, 0, $width, $height, $white);

    $barWidth = 2;
    $x = 10;

    for ($i = 0; $i < strlen($code); $i++) {
        $digit = intval($code[$i]);
        $barHeight = $height - 20;

        if ($digit % 2 == 0) {
            imagefilledrectangle($image, $x, 10, $x + $barWidth, $barHeight, $black);
        }

        $x += $barWidth + 2;
    }

    imagepng($image);
    imagedestroy($image);
}

$code = isset($_GET['code']) ? $_GET['code'] : '1234567890';
drawBarCode($code);
?>
