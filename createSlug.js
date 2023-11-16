function createSlug(title, posts) {
    // Verifico se il titolo è una stringa non vuota
    if (typeof title !== 'string' || title.trim() === '') {
      throw new Error('Il titolo deve essere una stringa non vuota.');
    }
  
    // tolgo spazi e converto in minuscolo
    let slug = title.trim().toLowerCase();
  
    // Sostituisco gli spazi con trattini
    slug = slug.replace(/\s+/g, '-');
  
    // Verifico se lo slug esiste già e incremento 
    let slugIndex = 1;
    const originalSlug = slug;
  
    // Continuo a incrementare lo slug finché ne trovo uno uguale tra i post esistenti
  while (posts.some(post => post.slug === slug)) {
    // Aggiungo l'indice allo slug originale
    slug = `${originalSlug}-${slugIndex}`; 
    // Incremento l'indice per il prossimo tentativo
    slugIndex++; 
  }
   
  
    return slug;
  }
  
  
  module.exports = createSlug;