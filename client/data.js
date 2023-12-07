const sephoraProducts = [
    {
        name: 'Urban Decay Naked3 Eyeshadow Palette',
        category: 'Makeup',
        price: 54.00,
        quantity: 18,
        description: 'A rose-hued eyeshadow palette with versatile shades for creating romantic looks.',
        imageUrl: 'https://di2ponv0v5otw.cloudfront.net/posts/2023/12/03/656d5a5c9464f3decdbb7f9b/m_656d5ab1308f07afcb4b9e7a.jpg',
        productType: 'Eyeshadow Palette',
      },
      {
        name: 'La Mer Crème de la Mer Moisturizing Cream',
        category: 'Skincare',
        price: 185.00,
        quantity: 8,
        description: 'An ultra-rich moisturizing cream that deeply hydrates and rejuvenates the skin.',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.3zSMxeiliodyJUf0sBg1FwHaLW&pid=Api&P=0&h=220',
        productType: 'Moisturizer',
      },
      {
        name: 'Dior Sauvage Eau de Toilette',
        category: 'Fragrance',
        price: 95.00,
        quantity: 14,
        description: 'A fresh and spicy fragrance with notes of bergamot, pepper, and vanilla.',
        imageUrl: 'https://www.nocibe.fr/bibliotheque/produits/DIOR/204337_dior_sauvage_eau_de_toilette_eau_de_toilette_60ml_packaging_1000x1000.jpg',
        productType: 'Cologne',
      },
      {
        name: 'Too Faced Better Than Sex Mascara',
        category: 'Makeup',
        price: 26.00,
        quantity: 25,
        description: 'A volumizing mascara for intense black lashes with a dramatic curl.',
        imageUrl: 'https://blogit-cdn.a-lehdet.fi/uploads/sites/69/2017/02/too-faced-better-than-sex-mascara-1-6.jpg',
        productType: 'Mascara',
      },
      {
        name: 'GlamGlow Supermud Clearing Treatment',
        category: 'Skincare',
        price: 59.00,
        quantity: 15,
        description: 'A facial mask that helps clear and prevent breakouts for a clearer complexion.',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.UUDQ23joN7oA3uHWmPPF3gHaE7&pid=Api&P=0&h=220',
        productType: 'Face Mask',
      },
      {
        name: 'Marc Jacobs Daisy Eau de Toilette',
        category: 'Fragrance',
        price: 84.00,
        quantity: 20,
        description: 'A floral and feminine fragrance with notes of wild berries and jasmine.',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.ZGzmvpMEzT6z0xPFYU5mLAHaHa&pid=Api&P=0&h=220',
        productType: 'Perfume',
      },
      {
        name: 'Anastasia Beverly Hills Dipbrow Pomade',
        category: 'Makeup',
        price: 21.00,
        quantity: 30,
        description: 'A waterproof and smudge-proof eyebrow pomade for defined and sculpted brows.',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.n2nNWuS01rm7zUCeuPm0HQHaE8&pid=Api&P=0&h=220',
        productType: 'Eyebrow Product',
      },
      {
        name: 'Caudalie Beauty Elixir',
        category: 'Skincare',
        price: 49.00,
        quantity: 12,
        description: 'A refreshing facial mist that tones and sets makeup while providing a radiant glow.',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.4nSb_y7rQ4yHmQVFKj1b1QHaI7&pid=Api&P=0&h=220',
        productType: 'Facial Mist',
      },
      {
        name: 'Giorgio Armani Acqua Di Gioia Eau de Parfum',
        category: 'Fragrance',
        price: 72.00,
        quantity: 16,
        description: 'A fresh and aquatic fragrance with notes of mint, lemon, and jasmine.',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.2HHs47SOB--qs01Id4f24QHaHa&pid=Api&P=0&h=220',
        productType: 'Perfume',
      },
    {
      name: 'Huda Beauty New Nude Eyeshadow Palette',
      category: 'Makeup',
      price: 65.00,
      quantity: 15,
      description: 'An eyeshadow palette with a mix of matte and shimmer shades for various looks.',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.DJzC7DBIXYMg8lT2avDReAHaHa&pid=Api&P=0&h=220',
      productType: 'Eyeshadow Palette',
    },
    {
      name: 'Drunk Elephant T.L.C. Sukari Babyfacial',
      category: 'Skincare',
      price: 80.00,
      quantity: 10,
      description: 'An at-home facial treatment for smoother and more radiant skin.',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.30yi4vZeGioEA0XsfueQ0QHaE8&pid=Api&P=0&h=220',
      productType: 'Facial Treatment',
    },
    {
      name: 'Tom Ford Black Orchid Eau de Parfum',
      category: 'Fragrance',
      price: 134.00,
      quantity: 8,
      description: 'A luxurious and mysterious fragrance with notes of black truffle and orchid.',
      imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw69250a35/images/hi-res/SKU/SKU_1121/486744_swatch.jpg?sw=600&sh=600',
      productType: 'Perfume',
    },
    {
      name: 'NARS Radiant Creamy Concealer',
      category: 'Makeup',
      price: 30.00,
      quantity: 20,
      description: 'A concealer that provides buildable coverage with a luminous finish.',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.qrK0ThN2OwHJqq48Me_uiQHaFD&pid=Api&P=0&h=220',
      productType: 'Concealer',
    },
    {
      name: 'Sunday Riley Good Genes All-In-One Lactic Acid Treatment',
      category: 'Skincare',
      price: 85.00,
      quantity: 12,
      description: 'An exfoliating treatment that brightens and refines the skin.',
      imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/Y9-8N4AlqO_r0wQO4brPTwceVSQ/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/11/758/n/1922153/9b186bf341076edd_netimg2zQNYt/i/Sunday-Riley-Good-Genes-All-in-One-Lactic-Acid-Treatment.jpg',
      productType: 'Exfoliator',
    },
    {
      name: 'Chloé Nomade Eau de Parfum',
      category: 'Fragrance',
      price: 105.00,
      quantity: 15,
      description: 'A floral and woody fragrance with notes of oakmoss and freesia.',
      imageUrl: 'https://www.nocibe.fr/bibliotheque/produits/CHLOE/222620_chloe_chloe_nomade_eau_de_parfum_eau_de_parfum_50_ml_autre-vu_1000x1000.jpg',
      productType: 'Perfume',
    },
    {
      name: 'Bobbi Brown Vitamin Enriched Face Base',
      category: 'Skincare',
      price: 62.00,
      quantity: 18,
      description: 'A priming moisturizer that hydrates and preps the skin for makeup application.',
      imageUrl: 'https://i5.walmartimages.com/asr/cf95b4e7-f964-46ed-9713-a43d7dc785d7_1.9e4ef85d0eef2335bcd8e5c54095b3fd.jpeg',
      productType: 'Primer',
    },
    {
      name: 'Yves Saint Laurent Black Opium Eau de Parfum',
      category: 'Fragrance',
      price: 98.00,
      quantity: 10,
      description: 'An addictive and seductive fragrance with notes of coffee and vanilla.',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.7Sgd0oQZC65zun1LN73UmwHaHa&pid=Api&P=0&h=220',
      productType: 'Perfume',
    },
    {
      name: 'Benefit Cosmetics Hoola Matte Bronzer',
      category: 'Makeup',
      price: 30.00,
      quantity: 22,
      description: 'A cult-favorite bronzer for a natural-looking tan.',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.QF2Sj6DwsucIF5aLMGUVpQHaHa&pid=Api&P=0&h=220',
      productType: 'Bronzer',
    },
    {
      name: 'Kiehl\'s Midnight Recovery Concentrate',
      category: 'Skincare',
      price: 52.00,
      quantity: 14,
      description: 'A nighttime facial oil that replenishes and restores the skin.',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.SfF8vXgO_lnxWoyKJu1DsQHaLH&pid=Api&P=0&h=220',
      productType: 'Facial Oil',
    },
    
  ];
  
  export default sephoraProducts;
  