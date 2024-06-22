<!DOCTYPE html>
<html lang="en">
<head>
    <title>Subscription Verified</title>
</head>
<body>
    <p>Dear {{$subscriber->email}},</p>
    <p>Your subscription has been verified.</p>
    <p>If you would like to unsubscribe yo can do so by clicking this link <a href={{route('unsubscribe', $subscriber->email)}}>Unsubscribe</a></p>
</body>
</html>
