import React from 'react'

export default function Price({salePrice, originalPrice}) {

    // Um die Preise + Rabatte dynamischer anzuzeigen
  return (
    <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              {originalPrice.toFixed(2)}€
            </span>
            {salePrice.toFixed(2)}€
          </>
        ) : (
          <>{originalPrice.toFixed(2)}€</>
        )}
      </div>
  )
}
