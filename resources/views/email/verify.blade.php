<!DOCTYPE html>
<html lang="en">
<head>
    <title>Verify your email</title>
</head>
<body>
    <p>Please click on the following link in order to verify as subscriber:</p>
    <p><a href="{{ route('subscription.verify', $subscriber->token) }}">Verify</a></p>
</body>
</html>
