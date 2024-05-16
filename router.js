

// 상품 생성 API
router.post('/products', (req, res) => {
    const { name, price } = req.body;
    const id = products.length + 1;
    const newProduct = { id, name, price };
    products.push(newProduct);
    res.json(newProduct);
});

// 상품 목록 조회 API
router.get('/products', (req, res) => {
    res.json(products);
});

// 상품 상세 조회 API
router.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(prod => prod.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: '상품을 찾을 수 없습니다.' });
    }
});

// 상품 수정 API
router.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;
    const index = products.findIndex(prod => prod.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], name, price };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: '상품을 찾을 수 없습니다.' });
    }
});

// 상품 삭제 API
router.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(prod => prod.id !== productId);
    res.status(204).send();
});
export default router;
