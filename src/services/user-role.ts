export default function handler(req:any, res:any) {
    // Example: Role based on token or session
    const token = req.cookies['auth-token'];

    if (token) {
        // Simulate decoding a token to get the role
        res.status(200).json({ role: 'admin' });
    } else {
        res.status(200).json({ role: 'guest' });
    }
}
