<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<title>DevPkg registration page example - PHP/Object</title>
	<link rel="stylesheet" type="text/css" href="fouc.css" /> <!-- http://en.wikipedia.org/wiki/Flash_of_unstyled_content -->
</head>

<body>
<?php
	require_once '../devpkg.php';
	DevPkg::getContainer('account');
?>
</body>

</html>
